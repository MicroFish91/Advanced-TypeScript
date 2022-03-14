interface MyUser {
  name: string;
  id: string;
  email?: string;
  phone?: string;
}

// interface MyUserOptionals {
//   name?: string;
//   id?: string;
//   email?: string;
//   phone?: string;
// }

type MyUserOptionals = Partial<MyUser>;

const merge = (user: MyUser, partialOverride: MyUserOptionals): MyUser => {
  return {
    ...user,
    ...partialOverride,
  };
};

console.log(
  merge(
    {
      name: "Matt",
      id: "mwf220",
      email: "matt@matt.com",
      phone: "612-312-3421",
    },
    { name: "Joe" }
  )
);
