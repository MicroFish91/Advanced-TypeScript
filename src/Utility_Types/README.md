# Utility Types

https://www.typescriptlang.org/docs/handbook/utility-types.html

1. Partial<Type>

Constructs a type with all properties of the Type set to optional.

2. Required<Type>

Constructs a type consisting of all properties of Type set to required (opposite of Partial).

3. Record<Keys, Type>

Constructs an object type whose property keys are Keys and whose property values are Type. This utility can be used to map the properties of a type to another type.

4. Pick<Type, Keys>

Constructs a type by picking the set of properties Keys (string literal or union of string literals) from Type.

5. Omit<Type, Keys>

Constructs a type by picking all properties from Type and then removing Keys (string literal or union of string literals).

6. Exclude<UnionType, ExcludedMembers>

Constructs a type by excluding from UnionType all union members that are assignable to ExcludedMembers.

7. Extract<Type, Union>

Constructs a type by extracting from Type all union members that are assignable to Union.

8. NonNullable<Type>

Constructs a type by excluding null and undefined from Type.

9. Parameters<Type>

Constructs a tuple type from the types used in the parameters of a function type Type.

10. ConstructorParameters<Type>

Constructs a tuple or array type from the types of a constructor function type. It produces a tuple type with all the parameter types (or the type never if Type is not a function).

11. ReturnType<Type>

Constructs a type consisting of the return type of function Type.

12. InstanceType<Type>

Constructs a type consisting of the instance type of a constructor function in Type.
