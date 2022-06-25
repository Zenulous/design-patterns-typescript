// Adapter
// Convert the interface of a class into another interface clients expect. Adapter lets classes work together that couldn't otherwise because of incompatible interfaces.

class CardioMachineMetricClient {
  // In a full implementation, the bpm is continuously set by the cardio machine
  private lastExerciseBpm: number | undefined = 100;
  getLastExerciseMetricsInBpm(): number | undefined {
    return this.lastExerciseBpm;
  }
}

class ImmutableLegacyCardioMachineMetricClient {
  public getLastExerciseMetrics(): string {
    // This client code retrieves the metrics in a different format than CardioMachineMetricClient.
    // This would make the metrics incompatible with newer machines.
    return "100 bpm";
  }
}

class LegacyCardioMachineAdapter extends CardioMachineMetricClient {
  private adaptee: ImmutableLegacyCardioMachineMetricClient;

  constructor() {
    super();
    this.adaptee = new ImmutableLegacyCardioMachineMetricClient();
  }

  override getLastExerciseMetricsInBpm(): number | undefined {
    const bpm = this.adaptee.getLastExerciseMetrics().split(" ")[0];
    if (!bpm) {
      return undefined;
    }
    return parseInt(bpm);
  }
}

const cardioMachineMetricClient = new CardioMachineMetricClient();
console.log(cardioMachineMetricClient.getLastExerciseMetricsInBpm());
const legacyCardioMachineAdapter = new LegacyCardioMachineAdapter();
console.log(legacyCardioMachineAdapter.getLastExerciseMetricsInBpm());
