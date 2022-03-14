function pluck<ItemType, KeyType extends keyof ItemType>(
  itemList: ItemType[],
  key: KeyType
): ItemType[KeyType][] {
  return itemList.map((item) => item[key]);
}

interface Pokemon {
  name: string;
  hp: number;
}

const pokeList: Pokemon[] = [
  {
    name: "bulbasaur",
    hp: 20,
  },
  {
    name: "ivyasaur",
    hp: 50,
  },
  {
    name: "venasaur",
    hp: 100,
  },
];

console.log(pluck(pokeList, "name"));
console.log(pluck(pokeList, "hp"));

// -----------------------------------

interface BaseEvent {
  time: number;
  user: string;
}

interface EventMap {
  addToCart: BaseEvent & { quantity: number; productId: string };
  checkout: BaseEvent;
}

function sendEvent<Action extends keyof EventMap>(action: Action, data: EventMap[Action]): void {
  console.log([action, data]);
}

sendEvent("addToCart", { time: 10, user: "Matt", quantity: 2, productId: "abc1234" });
sendEvent("checkout", { time: 10, user: "Matt " });
