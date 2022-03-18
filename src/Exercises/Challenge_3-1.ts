export = {};

type Event<T> = {
  name: keyof T;
  data: T[keyof T];
};

type FilterFunction<T> = (data: T[keyof T]) => boolean;
type Filters<T> = Record<keyof T, FilterFunction<T>[]>;

type MapFunction<T> = (data: T[keyof T]) => T[keyof T];
type Maps<T> = Record<keyof T, MapFunction<T>[]>;

class EventProcessor<T extends object> {
  protected events: Event<T>[] = [];
  protected filters: Filters<T> = <Filters<T>>{};
  protected maps: Maps<T> = <Maps<T>>{};

  handleEvent<E extends keyof T>(eventName: E, data: T[E]): void {
    const event: Event<T> = { name: eventName, data };

    // Run it through filters
    if (
      this.filters[eventName] !== undefined &&
      !this.filters[eventName]?.every((filFunc) => filFunc(event.data))
    )
      return;

    // Run it through maps
    this.maps[eventName]?.forEach((mapFunc) => {
      event.data = mapFunc(event.data);
    });

    // Add to processed events
    this.events.push(event);
  }

  addFilter<E extends keyof T>(eventName: E, filter: (data: T[E]) => boolean): void {
    this.filters[eventName] ||= [];
    this.filters[eventName].push(filter as FilterFunction<T>);
  }

  addMap<E extends keyof T>(eventName: E, map: (data: T[E]) => T[E]): void {
    this.maps[eventName] ||= [];
    this.maps[eventName].push(map as unknown as MapFunction<T>);
  }

  getProcessedEvents() {
    return this.events;
  }
}

interface UserEventMap {
  login: { user?: string | null; name?: string; hasSession?: boolean };
  logout: { user?: string | null };
}

class UserEventProcessor extends EventProcessor<UserEventMap> {}

const uep = new UserEventProcessor();

uep.addFilter("login", ({ user }) => Boolean(user));

uep.addMap("login", (data) => ({
  ...data,
  hasSession: Boolean(data.user && data.name),
}));

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
