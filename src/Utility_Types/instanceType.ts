// Demo in combination with mixins
class Car {
  constructor(public name: string) {}
}

class User {
  constructor(public name: string, public age: number) {}
}

type Constructor = new (...args: any[]) => {};

function deletable<Baseclass extends Constructor>(Base: Baseclass) {
  return class extends Base {
    deleteable: boolean;
    delete() {}
  };
}

const DeletableUser = deletable(User);
const DeletableCar = deletable(Car);

type DeletableUserInstance = InstanceType<typeof DeletableUser>;
type DeletableCarInstance = InstanceType<typeof DeletableCar>;

class Profile {
  user: DeletableUserInstance;
  car: DeletableCarInstance;
}

const prof = new Profile();
prof.user = new DeletableUser("Joe", 30);
prof.car = new DeletableCar("Ferrari");
