export = {};

// Built off of classes.ts example

interface Database<T, K> {
  get(key: K): T;
  set(key: K, val: T): void;
}

interface Persistable {
  saveToString(): string;
  restoreFromString(storedState: string): void;
}

type DbKeyType = string | number | symbol;

// private - only this class can see it / change it
// protected - this class or any of its decendants can see it / change it

class InMemoryDatabase<T, K extends DbKeyType> implements Database<T, K> {
  // private db: Record<string, any> = {};
  protected db: Record<K, T> = {} as Record<K, T>;

  get(key: K): T {
    return this.db[key];
  }

  set(key: K, val: T): void {
    this.db[key] = val;
  }
}

// will not work if db is private, db needs to be protected
class PersistentMemoryDB<T, K extends DbKeyType>
  extends InMemoryDatabase<T, K>
  implements Persistable
{
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

const myDb2 = new PersistentMemoryDB<number, string>();
myDb2.set("age", 33);

console.log(myDb2.saveToString());
