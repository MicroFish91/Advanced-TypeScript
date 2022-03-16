interface Database {
  get(key: string): any;
  set(key: string, val: any): void;
}

interface Persistable {
  saveToString(): string;
  restoreFromString(storedState: string): void;
}

// private - only this class can see it / change it
// protected - this class or any of its decendants can see it / change it

class InMemoryDatabase implements Database {
  // private db: Record<string, any> = {};
  protected db: Record<string, any> = {};

  get(key: string): any {
    return this.db[key];
  }

  set(key: string, val: any): void {
    this.db[key] = val;
  }
}

// will not work if db is private, db needs to be protected
class PersistentMemoryDB extends InMemoryDatabase implements Persistable {
  saveToString(): string {
    return JSON.stringify(this.db);
  }
  restoreFromString(storedState: string): void {
    this.db = JSON.parse(storedState);
  }
}

const myDb = new InMemoryDatabase();

myDb.set("name", "Matt");
console.log(myDb.get("name"));

myDb.db["name"] = "Joe"; // private keeps this from happening
