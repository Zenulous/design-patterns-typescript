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
    return this.proteinShake.drinkShake();
  }
}

const proteinShake = new ProteinShake();
console.log(proteinShake.drinkShake());
console.log(new ProteinShakeMilkDecorator(proteinShake).drinkShake());
