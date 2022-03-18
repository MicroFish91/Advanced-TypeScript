export = {};

type FilterFunction<T> = (data: T) => boolean;
type MapFunction<T> = (data: T) => T;

type EventHandler<T> = {
  [Property in keyof T as `filter${Capitalize<string & Property>}`]?: FilterFunction<T[Property]>;
} & {
  [Property in keyof T as `map${Capitalize<string & Property>}`]?: MapFunction<T[Property]>;
};

type Event<T> = {
  eventName: keyof T;
  data: T[keyof T];
};
type Events<T> = Event<T>[];

class EventProcessor<T extends object> {
  protected events: Events<T> = [];
  protected eventHandlers: EventHandler<T>[] = [];

  handleEvent<K extends keyof T>(eventName: K, data: T[K]): void {
    const event: Event<T> = { eventName, data };
    const capitalize = (s: string) => s[0].toUpperCase() + s.slice(1);
    let runEvent: boolean = true;

    for (const handler of this.eventHandlers) {
      const filterFunc = handler[
        `filter${capitalize(eventName as string)}` as keyof EventHandler<T>
      ] as FilterFunction<T[K]> | undefined;

      if (filterFunc && !filterFunc(data)) {
        runEvent = false;
      }
    }

    if (!runEvent) return;

    for (const handler of this.eventHandlers) {
      const mapFunc = handler[`map${capitalize(eventName as string)}` as keyof EventHandler<T>] as
        | MapFunction<T[K]>
        | undefined;

      if (mapFunc) {
        event.data = mapFunc(event.data as T[K]);
      }
    }

    this.events.push(event);
  }

  addHandler(handler: EventHandler<T>): void {
    this.eventHandlers.push(handler);
  }

  getProcessedEvents(): Events<T> {
    return this.events;
  }
}

interface UserEventMap {
  login: { user?: string | null; name?: string; hasSession?: boolean };
  logout: { user?: string | null };
}

class UserEventProcessor extends EventProcessor<UserEventMap> {}

const uep = new UserEventProcessor();

uep.addHandler({
  filterLogin: ({ user }) => Boolean(user),
  mapLogin: (data) => ({
    ...data,
    hasSession: Boolean(data.user && data.name),
  }),
});

uep.handleEvent("login", {
  user: null,
  name: "jack",
});
uep.handleEvent("login", {
  user: "tom",
  name: "tomas",
});
uep.handleEvent("logout", {
  user: "tom",
});

console.log(uep.getProcessedEvents());

/*
Result:
[
  {
    eventName: 'login',
    data: { user: 'tom', name: 'tomas', hasSession: true }
  },
  { eventName: 'logout', data: { user: 'tom' } }
]
*/
