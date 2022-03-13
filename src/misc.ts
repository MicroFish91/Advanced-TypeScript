// * 1. keyof
// The keyof operator takes an object type and produces a string or
// numeric literal union of its keys. The following type P is the same
// type as “x” | “y”:

type Point = { x: number; y: number };
type PointKeys = keyof Point;

// Pointkeys literally holds the strings "x" | "y"
function clearPointKey(_point: Point, _key: PointKeys) {}

// * 2. Indexed Access Types
type Person = { age: number; name: string; alive: boolean };

// number
type Age = Person["age"];

// number | string | boolean
type I1 = Person[keyof Person];

// keyof vs keyof typeof
class Pointer {
  x: number;
}

// "x"
type PointKeys2 = keyof Pointer;

// Pointer
type PointsKeys3 = typeof Pointer;

// "prototype"
type PointKeys4 = keyof typeof Pointer;
