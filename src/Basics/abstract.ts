abstract class StreetFighter {
  public age: number;

  constructor(age: number) {
    this.age = age;
  }

  move() {}
  fight() {
    console.log(`${this.name} attack with ${this.getSpecialAttack()}`);
  }

  abstract getSpecialAttack(): string;
  abstract get name(): string;
}

class Ryu extends StreetFighter {
  constructor(age: number) {
    super(age);
  }

  getSpecialAttack(): string {
    return "Hadoken";
  }

  get name(): string {
    return "Ryu";
  }

  get realAge(): number {
    return this.age + 1;
  }

  set realAge(age: number) {
    this.age = age;
  }
}

class ChunLi extends StreetFighter {
  constructor(age: number) {
    super(age);
  }

  getSpecialAttack(): string {
    return "Lighting Kick";
  }
  get name(): string {
    return "Chun-Li";
  }
}

const ryu = new Ryu(22);
const chunLi = new ChunLi(23);

console.log(ryu.name);
console.log(ryu.age);
console.log(ryu.realAge);

ryu.realAge = 33;
console.log(ryu.age);

ryu.fight();
chunLi.fight();
