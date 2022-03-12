// type SomeType = string;

// // If SomeType is assignable to string, assign string else null
// type MyConditionalType = SomeType extends string ? string : null; // string

// // ** Illustrating distributive property of conditional types
// function someFunction<T>(value: T) {
//   type A = T extends boolean
//     ? "TYPE A"
//     : T extends string
//     ? "TYPE B"
//     : T extends number
//     ? "TYPE C"
//     : "TYPE D";

//   // If passed argument is assignable to boolean assign Type A, else Type B
//   const someOtherFunction = (
//     someArg: T extends boolean ? "TYPE A" : "TYPE B"
//   ) => {
//     const a: "TYPE A" | "TYPE B" = someArg;
//     console.log(a);
//   };
//   return someOtherFunction;
// }

// const result = someFunction(""); // Type B
// const result1 = someFunction(true); // Type A

// // Never is used in typescript to describe some type that never happens or doesn't exist
// type StringOrNot<T> = T extends string ? string : never;
// type AUnion = string | boolean | never; // string | boolean

// // type Exclude<T, U> = T extends U ? never : T;
// //                        <      T      >  <   U   >
// type ResultType = Exclude<"a" | "b" | "c" | "d", "a" | "b">; // "c" | "d"

// /*
//   Deriving ResultType:
//   "a" extends "a" | "b" ? never : "a" => never
//   "b" extends "a" | "b" ? never : "a" => never
//   "c" extends "a" | "b" ? never : "a" => "c"
//   "d" extends "a" | "b" ? never : "a" => "d"
// */

// // Comparing functions
// type MyType<T> = (() => T) extends () => string | number ? T : never;
// type MyResult11 = MyType<string | number | boolean>; // never
// type MyResult12 = MyType<string | number>; // string | number

// // Comparing normal distributive
// type MyTypeTwo<T> = T extends string | number ? T : never;
// type MyResult21 = MyTypeTwo<string | number | boolean>; // string | number
// type MyResult22 = MyTypeTwo<string | number>; // string | number
// type MyResult23 = MyTypeTwo<string>; // string
