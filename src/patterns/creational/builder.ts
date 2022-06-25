// Builder
// Separate the construction of a complex object from its representation so that the same construction process can create different representations.

interface Gym {
  price: number;
  name: string;
  weightMachine: boolean;
  heavyWeights: boolean;
  lightWeights: boolean;
  cardioMachines: boolean;
  muscleMachines: boolean;
  sauna: boolean;
}
class GymBuilder {
  private _gym: Gym;
  private readonly _initialGym: Gym = {
    price: 0,
    name: "",
    weightMachine: false,
    heavyWeights: false,
    lightWeights: false,
    cardioMachines: false,
    muscleMachines: false,
    sauna: false,
  };
  constructor() {
    this._gym = this._initialGym;
  }
  public setName(name: string): GymBuilder {
    this._gym.name = name;
    return this;
  }
  public addWeightMachine(): GymBuilder {
    this._gym.weightMachine = true;
    return this;
  }
  public addHeavyWeights(): GymBuilder {
    this._gym.heavyWeights = true;
    return this;
  }
  public addLightWeights(): GymBuilder {
    this._gym.lightWeights = true;
    return this;
  }
  public addCardioMachines(): GymBuilder {
    this._gym.cardioMachines = true;
    return this;
  }
  public addMuscleMachines(): GymBuilder {
    this._gym.muscleMachines = true;
    return this;
  }
  public addSauna(): GymBuilder {
    this._gym.sauna = true;
    return this;
  }
  public setPrice(price: number): GymBuilder {
    this._gym.price = price;
    return this;
  }
  public build(): Gym {
    const gym = this._gym;
    this._gym = {
      price: 0,
      name: "",
      weightMachine: false,
      heavyWeights: false,
      lightWeights: false,
      cardioMachines: false,
      muscleMachines: false,
      sauna: false,
    };
    return gym;
  }
}

class StandardGymDirector {
  builder = new GymBuilder();
  constructor() {
    return;
  }
  public buildCompleteGym() {
    this.builder.setPrice(50);
    this.builder.addWeightMachine();
    this.builder.addHeavyWeights();
    this.builder.addLightWeights();
    this.builder.addMuscleMachines();
    this.builder.addCardioMachines();
    this.builder.addSauna();
    return this.builder.build();
  }
  public buildCheapGym() {
    this.builder.setPrice(20);
    this.builder.addWeightMachine();
    this.builder.addHeavyWeights();
    this.builder.addLightWeights();
    this.builder.addMuscleMachines();
    this.builder.addCardioMachines();
    return this.builder.build();
  }
}

const director = new StandardGymDirector();
console.log(director.buildCompleteGym());
console.log(director.buildCheapGym());
