export = {};

interface MyUser {
  name: string;
  id: number;
  email?: string;
}

type JustEmailAndName = Pick<MyUser, "email" | "name">;
