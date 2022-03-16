export = {};

// const beforeLoad = "beforeload";
// const loading = "loading";
// const loaded = "loaded";

// if no assignment is made and only the variables are declared
// they are set to 0, 1, 2... etc.
enum LoadingState {
  beforeLoad = "beforeload",
  loading = "loading",
  loaded = "loaded",
}

const isLoading = (state: LoadingState): boolean => state === LoadingState.loading;

// console.log(isLoading("dog"));
console.log(isLoading(LoadingState.beforeLoad));
console.log(isLoading(LoadingState.loading));

// -----------------
// Literal Types

// Numeric literals e.g. 1 | 2 | 3
function rollDice(rolls: 1 | 2 | 3): number {
  let count = 0;
  for (let i = 0; i < rolls; i++) {
    count += Math.floor(Math.random() * 5) + 1;
  }
  return count;
}

console.log(rollDice(3)); // ok
console.log(rollDice(4)); // not ok

// ----------------
// string literals
// can be used to match function variants (function overloading)

function sendEvent(name: "addToCart", data: { productId: number }): void;
function sendEvent(name: "checkout", data: { cartCount: number }): void;
function sendEvent(name: string, data: unknown): void {
  console.log(`${name}: ${JSON.stringify(data)}`);
}

// won't work
sendEvent("what", "something");

// works
sendEvent("addToCart", { productId: 1 });
sendEvent("checkout", { cartCount: 2 });
