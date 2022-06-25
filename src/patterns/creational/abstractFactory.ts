// Abstract Factory
// Provide an interface for creating families of related or dependent objects without specifying their concrete classes.

abstract class AbstractProteinShakeFactory {
  abstract createProteinShake(): AbstractProteinShake;
  abstract createVeganProteinShake(): AbstractVeganProteinShake;
}

class ConcreteProteinShakeFactory extends AbstractProteinShakeFactory {
  createProteinShake(): AbstractProteinShake {
    return new ConcreteProteinShake();
  }

  createVeganProteinShake() {
    return new ConcreteVeganProteinShake();
  }
}

interface AbstractProteinShake {
  calculateProteinIntake(): string;
}

class ConcreteProteinShake implements AbstractProteinShake {
  public calculateProteinIntake(): string {
    return "28g";
  }
}

abstract class AbstractVeganProteinShake {
  abstract calculateProteinIntake(): string;
  abstract compareProteinIntakeWithOtherShake(
    comparisonShake: AbstractProteinShake
  ): string;
}

class ConcreteVeganProteinShake implements AbstractVeganProteinShake {
  public calculateProteinIntake(): string {
    return "25g";
  }

  public compareProteinIntakeWithOtherShake(
    comparisonShake: AbstractProteinShake
  ): string {
    return (
      "Protein intake for this shake is " +
      this.calculateProteinIntake() +
      ", while the other shake is " +
      comparisonShake.calculateProteinIntake()
    );
  }
}

const factory = new ConcreteProteinShakeFactory();
const proteinShake = factory.createProteinShake();
const veganProteinShake = factory.createVeganProteinShake();

console.log(veganProteinShake.calculateProteinIntake());
console.log(veganProteinShake.compareProteinIntakeWithOtherShake(proteinShake));
