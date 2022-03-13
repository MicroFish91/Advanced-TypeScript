// https://www.typescriptlang.org/docs/handbook/utility-types.html

// * 1. Partial<Type>
// Constructs a type with all properties of Type set to optional.
interface Starship {
  name: string;
  age: number;
  enableHyperjump: boolean;
}

const updateStarship = (_id: number, _starship: Partial<Starship>) => {};

updateStarship(1, { name: "Explorer " });
updateStarship(1, { enableHyperjump: true });

// * 2. Required<Type>
// Constructs a type consisting of all properties of Type set to required.

// * 3. Readonly<Type>
// Constructs a type with all properties of Type set to readonly,
// meaning the properties of the constructed type cannot be reassigned.

// * 4. Record<Keys, Type>
// Constructs an object type whose property keys are Keys and whose property values are Type.
// This utility can be used to map the properties of a type to another type.
const aRecord: Record<string, number> = {
  apples: 10,
  oranges: 20,
};

const starships: Record<string, Starship> = {
  Explorer1: {
    name: "Explorer1",
    age: 10,
    enableHyperjump: true,
  },
  Explorer2: {
    name: "Explorer2",
    age: 5,
    enableHyperjump: false,
  },
};

// * 5. Pick<Type, Keys>
// Constructs a type by picking the set of properties Keys
// (string literal or union of string literals) from Type.

// { name: string; age: number; }
type StarshipNameAndAge = Pick<Starship, "name" | "age">;

// * 6. Omit<Type, Keys>
// Opposite of pick
// Constructs a type by picking all properties from Type and then removing Keys
// (string literal or union of string literals).

// { name: string }
type StarshipNameOnly = Omit<Starship, "age" | "enableHyperjump">;

// * 7. Exclude<UnionType, ExcludedMembers>
// Constructs a type by excluding from UnionType all union members that
// are assignable to ExcludedMembers.
type AvailableDrinks = "Coffee" | "Tea" | "Orange Juice" | "Lemonade";
type DrinksJohnHates = "Coffee" | "Orange Juice";

// "Tea" | "Lemonade"
let johnDrinks: Exclude<AvailableDrinks, DrinksJohnHates>;

// * 8. NonNullable<Type>
// Constructs a type by excluding null and undefined from Type.

// string | number
type t0 = NonNullable<string | number | undefined>;

// string[]
type t1 = NonNullable<string[] | null | undefined>;

// * 9. Parameters<Type>
// Constructs a tuple type from the types used in the parameters of a function type Type.

// [s: string]
type T1 = Parameters<(s: string) => void>;

// * 10. ReturnType<Type>
// Constructs a type consisting of the return type of function Type.

// string
type T0 = ReturnType<() => string>;

// * 11. InstanceType<Type>
// Constructs a type consisting of the instance type of a constructor function in Type.

class C {
  x = 0;
  y = 0;
}

// C
type C0 = InstanceType<typeof C>;
