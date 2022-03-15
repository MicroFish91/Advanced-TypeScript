export = {};

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

type MyUserRequired = Required<MyUser>;

const merge = (user: MyUser, completeOverride: MyUserRequired): MyUser => {
  return {
    ...user,
    ...completeOverride,
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
    { name: "Joe", id: "mwf220", email: "matt@matt.com", phone: "612-312-3421" }
  )
);
