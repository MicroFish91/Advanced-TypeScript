export = {};

// [message?: string]
type T0 = ConstructorParameters<ErrorConstructor>;

// string[]
type T1 = ConstructorParameters<FunctionConstructor>;
``;

// [pattern: string | RegExp, flags?: string]
type T2 = ConstructorParameters<RegExpConstructor>;

// unknown[]
type T3 = ConstructorParameters<any>;

// never
type T4 = ConstructorParameters<Function>;
