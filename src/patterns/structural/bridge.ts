// Bridge
// Decouple an abstraction from its implementation so that the two can vary independently.

class CardioMachineRemoteAbstration {
  protected implementation: MachineImplementation;

  constructor(machineImplementation: MachineImplementation) {
    this.implementation = machineImplementation;
  }

  public startDefaultExerciseProgram(): boolean {
    this.implementation.startExerciseProgram(0);
    return true;
  }
}

interface MachineImplementation {
  startExerciseProgram(programId: number): boolean;
}

/**
 * Each Concrete MachineImplementation corresponds to a specific platform and
 * implements the MachineImplementation interface using that platform's API.
 */
class Treadmill implements MachineImplementation {
  treadMillSpeed = 0;
  startExerciseProgram(programId: number): boolean {
    console.log(`Starting treadmill program ${programId}`);
    this.treadMillSpeed = 5;
    return true;
  }
}
class SpinningMachine implements MachineImplementation {
  spinningResistance = 0;
  startExerciseProgram(programId: number): boolean {
    console.log(`Starting spinning machine program ${programId}`);
    this.spinningResistance = 1;
    return true;
  }
}

const treadmillImplementation = new Treadmill();
const abstraction = new CardioMachineRemoteAbstration(treadmillImplementation);
abstraction.startDefaultExerciseProgram();

const spinningMachineImplementation = new SpinningMachine();
const remoteAbstraction2 = new CardioMachineRemoteAbstration(
  spinningMachineImplementation
);
remoteAbstraction2.startDefaultExerciseProgram();
