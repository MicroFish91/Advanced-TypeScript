// "a"
type T0 = Extract<"a" | "b" | "c", "a" | "f">;

// () => void
type T1 = Extract<string | number | (() => void), Function>;

// "a" | "b"
type T2 = Extract<"a" | "b" | "c", "a" | "b">;
