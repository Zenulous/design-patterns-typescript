// Flyweight
// Use sharing to support large numbers of fine-grained objects efficiently.

class GymWeight {
  weightInKg: number;
  weightPresentInLocations: GymLocationName[] = [];
  constructor(weightInKg: number) {
    this.weightInKg = weightInKg;
  }

  public addWeightToGym(locationName: GymLocationName): void {
    this.weightPresentInLocations.push(locationName);
  }
}

class FlyweightFactory {
  private flyweights: { [key: string]: GymWeight } = {};

  constructor(initialFlyweights: number[]) {
    for (const weightInKg of initialFlyweights) {
      this.flyweights[weightInKg] = new GymWeight(weightInKg);
    }
  }

  public getFlyweight(weightInKg: number): GymWeight {
    if (!(weightInKg in this.flyweights)) {
      this.flyweights[weightInKg] = new GymWeight(weightInKg);
    }
    const flyWeight = this.flyweights[weightInKg];
    if (flyWeight == null) {
      throw new Error();
    }
    return flyWeight;
  }

  public countFlyweights(): void {
    const count = Object.keys(this.flyweights).length;
    console.log(`${count} flyweight(s)`);
  }
}

enum GymLocationName {
  newYork = "newYork",
  boston = "boston",
}

// There are hundreds of thousands of weights spread across all gyms.
// Instead of creating an object for each of them, each weight by KG gets a flyweight object.
// The flyweight object is shared among all the gyms that have the same weight.
const factory = new FlyweightFactory([
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44, 45, 46, 47, 48, 49,
]);

factory.countFlyweights();

const flyweight = factory.getFlyweight(50);

flyweight.addWeightToGym(GymLocationName.newYork);
flyweight.addWeightToGym(GymLocationName.boston);
console.log(flyweight.weightPresentInLocations);

factory.countFlyweights();
