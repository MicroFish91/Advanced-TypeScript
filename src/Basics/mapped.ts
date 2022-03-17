type MyFlexibleDogInfo = {
  [key: string]: string | number;
  name: string;
};

// type MyFlexibleDogInfo = {
//   name: string;
// } & Record<string, string>;

const dog: MyFlexibleDogInfo = {
  name: "LG",
  breed: "Golden",
};

interface DogInfo {
  name: string;
  age: number;
}

type OptionsFlags<Type> = {
  [Property in keyof Type]: boolean;
};

// remaps DogInfo to the same properties but with booleans
type DogInfoOptions = OptionsFlags<DogInfo>;

// ---------------------------
// Mapped Types using Template Literals

// Optional On change
// type Listeners<Type> = {
//   [Property in keyof Type as `on${Capitalize<string & Property>}Change`]?: (
//     newValue: Type[Property]
//   ) => void;
// };

// Optional On change and on delete
type Listeners<Type> = {
  [Property in keyof Type as `on${Capitalize<string & Property>}Change`]?: (
    newValue: Type[Property]
  ) => void;
} & {
  [Property in keyof Type as `on${Capitalize<string & Property>}Delete`]?: (
    newValue: Type[Property]
  ) => void;
};

function listenToObject<T>(_obj: T, _listeners: Listeners<T>): void {
  throw "Needs to be implemented";
}

type DogInfoListeners = Listeners<DogInfo>;

// ---------

const lg = {
  name: "LG",
  age: 13,
  something: 12,
};

listenToObject(lg, {
  onNameChange: (_v: string) => {},
  onAgeChange: (_v: number) => {},
  onSomethingChange: (_v: number) => {},
});
