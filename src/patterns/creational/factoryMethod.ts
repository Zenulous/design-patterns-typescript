// Factory Method
// Define an interface for creating an object, but let subclasses decide which class to instantiate. Factory Method lets a class defer instantiation to subclasses.

abstract class ProteinShakeCreator {
  protected abstract factoryMethod(): ProteinShakeChocolate;
  public prepareNewShakeAndGetFlavor(): string {
    // Call the factory method to create a Product object.
    const product = this.factoryMethod();
    // Now, use the product.
    return `🥤 I prepared a milkshake for you with a ${product.getFlavor()} flavor`;
  }
}

class ProteinCreatorChocolate extends ProteinShakeCreator {
  factoryMethod(): ProteinShakeChocolate {
    return new ProteinShakeChocolate();
  }
}

interface ProteinShake {
  getFlavor(): string;
}

class ProteinShakeChocolate implements ProteinShake {
  private flavor = "chocolate";

  public getFlavor(): string {
    return this.flavor;
  }
}

const creator = new ProteinCreatorChocolate();
console.log(creator.prepareNewShakeAndGetFlavor());
