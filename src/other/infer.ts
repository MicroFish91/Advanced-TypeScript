type InferSomething<T> = T extends infer U ? U : any;
type Inferred = InferSomething<string>;

type InferSomething2<T> = T extends { a: infer A; b: number } ? A : any;
type Inferred2 = InferSomething2<"hi">; // any
type Inferred3 = InferSomething2<{}>; // any
type Inferred4 = InferSomething2<{ a: string; b: number }>; // string
type Inferred5 = InferSomething2<{ a: string; b: string }>; // any

type InferSomething3<T> = T extends { a: infer A; b: infer B } ? A & B : any;
type Inferred6 = InferSomething3<{
  a: { title1: string };
  b: { title2: string };
}>;

// type ReturnType<T extends (...args: any) => any> =
// T extends (...args: any) => infer R ? R : any;
type MyFuncReturnValue = ReturnType<() => true>;
