// Composite
// Compose objects into tree structures to represent part-whole hierarchies. Composite lets clients treat individual objects and compositions of objects uniformly.

interface DumbbellRackItem {
  weight: number;
  priceInEuro: number;
}

class DumbbellRackDumbbell implements DumbbellRackItem {
  weight: number;
  priceInEuro: number;
  constructor(weight: number, priceInEuro: number) {
    this.weight = weight;
    this.priceInEuro = priceInEuro;
  }
}

class CompositeDumbbellRack implements DumbbellRackItem {
  weight: number;
  priceInEuro: number;
  dumbbells: DumbbellRackItem[];
  constructor() {
    // The rack itself has a weight an a cost
    this.weight = 50;
    this.priceInEuro = 150;
    this.dumbbells = [];
  }
  addDumbbell(dumbbell: DumbbellRackItem) {
    this.dumbbells.push(dumbbell);
  }
  getTotalWeight(): number {
    let totalWeight = 0;
    for (const dumbbell of this.dumbbells) {
      totalWeight += dumbbell.weight;
    }
    return totalWeight;
  }
  getTotalPrice(): number {
    let totalPrice = 0;
    for (const dumbbell of this.dumbbells) {
      totalPrice += dumbbell.priceInEuro;
    }
    return totalPrice;
  }
}

const dumbbellRack = new CompositeDumbbellRack();
dumbbellRack.addDumbbell(new DumbbellRackDumbbell(10, 15));
dumbbellRack.addDumbbell(new DumbbellRackDumbbell(10, 15));
dumbbellRack.addDumbbell(new DumbbellRackDumbbell(20, 25));
dumbbellRack.addDumbbell(new DumbbellRackDumbbell(20, 25));
dumbbellRack.addDumbbell(new DumbbellRackDumbbell(30, 40));
dumbbellRack.addDumbbell(new DumbbellRackDumbbell(30, 40));
console.log(dumbbellRack.getTotalWeight());
console.log(dumbbellRack.getTotalPrice());
