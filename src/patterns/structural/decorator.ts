// Decorator
// Attach additional responsibilities to an object dynamically. Decorators provide a flexible alternative to subclassing for extending functionality.

class ProteinShake {
  calories = 200;
  proteinInGrams = 28;
  drinkShake() {
    return `Gulp! You just drank a protein shake and gained ${this.proteinInGrams} grams of protein, plus ${this.calories} calories.`;
  }
}
class ProteinShakeMilkDecorator {
  proteinShake: ProteinShake;
  constructor(proteinShake: ProteinShake) {
    this.proteinShake = proteinShake;
  }
  drinkShake() {
    console.log("Adding milk to your protein shake...");
    this.proteinShake.calories += 75;
    this.proteinShake.proteinInGrams += 5;
    return this.proteinShake.drinkShake();
  }
}

const proteinShake = new ProteinShake();
console.log(proteinShake.drinkShake());
console.log(new ProteinShakeMilkDecorator(proteinShake).drinkShake());

// The above is a standard class implementation, but Typescript also supports function decorators.
// The following snippet is a function decorator:

console.log("\nOther TypeScript decorator implementation:");

function proteinShakeMilkDecorator() {
  return function (
    target: object,
    key: string | symbol,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;
    descriptor.value = function (this: DecoratedProteinShake): object {
      this.calories += 75;
      this.proteinInGrams += 5;
      return originalMethod.apply(this);
    };
  };
}

class DecoratedProteinShake {
  calories = 200;
  proteinInGrams = 28;
  @proteinShakeMilkDecorator()
  drinkShake() {
    return `Gulp! You just drank a protein shake and gained ${this.proteinInGrams} grams of protein, plus ${this.calories} calories.`;
  }
}

const decoratedProteinShake = new DecoratedProteinShake();
console.log(decoratedProteinShake.drinkShake());
