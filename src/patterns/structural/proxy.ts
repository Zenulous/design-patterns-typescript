// Proxy
// Provide a surrogate or placeholder for another object to control access to it.

interface GymMuscleMachine {
  readMetrics(): string;
}

/**
 * The RealSubject contains some core business logic. Usually, RealSubjects are
 * capable of doing some useful work which may also be very slow or sensitive -
 * e.g. correcting input data. A Proxy can solve these issues without any
 * changes to the RealSubject's code.
 */
class ShoulderPressMachine implements GymMuscleMachine {
  constructor() {
    // Imagine the constructor being filled with resource intensive calls
    return;
  }
  public readMetrics(): string {
    return "The machine currently has no metrics";
  }
}

/**
 * The Proxy has an interface identical to the RealSubject.
 */
class ShoulderPressMachineProxy implements GymMuscleMachine {
  private realShoulderPressMachine: ShoulderPressMachine | undefined;

  isMachineAvailable() {
    // Imagine this method checking if the gym even has a machine
    return true;
  }

  readMetrics(): string {
    if (this.realShoulderPressMachine == null) {
      if (this.isMachineAvailable()) {
        // Only if the gym has a machine, take the effort to create the real object
        this.realShoulderPressMachine = new ShoulderPressMachine();
        return this.realShoulderPressMachine.readMetrics();
      } else {
        return "The machine is not available";
      }
    } else {
      return this.realShoulderPressMachine.readMetrics();
    }
  }
}

const proxy = new ShoulderPressMachineProxy();
console.log(proxy.readMetrics());
