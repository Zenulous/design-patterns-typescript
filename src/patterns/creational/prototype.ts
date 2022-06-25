// Prototype
// Specify the kinds of objects to create using a prototypical instance, and create new objects by copying this prototype.

class ProteinShake {
  dataFromDatabase: object;
  constructor() {
    // Creating the object may require fetching a lot of static data from a DB
    // It would be expensive to fetch the data every time we create a new object
    // We can store the data in a static variable and then just clone it
    this.dataFromDatabase = { data: "foobar" };
  }
}
class ProteinShakePrototype {
  component: ProteinShake | undefined;
  clone(): this {
    const clone = Object.create(this);
    if (!this.component) {
      throw new Error("Component not initialized");
    }
    // (This example only clones properties)
    clone.component = { ...this.component };
    return clone;
  }
}

const p1 = new ProteinShakePrototype();
p1.component = new ProteinShake();
const p2 = p1.clone();
console.log(p2.component?.dataFromDatabase);
