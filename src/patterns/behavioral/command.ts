// Command
// Encapsulate a request as an object, thereby letting you parameterize clients with different requests, queue or log requests, and support undoable operations.

interface Command {
  execute(): void;
}

class CheckInGymMemberCommand implements Command {
  private memberId: string;

  constructor(memberId: string) {
    this.memberId = memberId;
  }

  public execute(): void {
    console.log(`Checking in ${this.memberId}`);
  }
}

class OpenGymDoorComplexCommand implements Command {
  private receiver: DoorSOCReceiver;
  constructor(receiver: DoorSOCReceiver) {
    this.receiver = receiver;
  }

  public execute(): void {
    console.log("Opening a door in the gym remotely...");
    this.receiver.openDoor();
  }
}

class DoorSOCReceiver {
  public openDoor(): void {
    console.log(`Opening door for 10 seconds...`);
  }
}

class Invoker {
  private onStart: Command | undefined;

  private onFinish: Command | undefined;

  public setOnStart(command: Command): void {
    this.onStart = command;
  }

  public setOnFinish(command: Command): void {
    this.onFinish = command;
  }

  public checkInMemberAndOpenDoorRemotely(): void {
    console.log("Gym member used remote assistance to check in after midnight");
    if (this.isCommand(this.onStart)) {
      this.onStart.execute();
    }

    console.log("Validating if member is allowed to check in remotely..");

    if (this.isCommand(this.onFinish)) {
      this.onFinish.execute();
    }
  }

  private isCommand(object: Command | undefined): object is Command {
    return object?.execute !== undefined;
  }
}

const invoker = new Invoker();
invoker.setOnStart(new CheckInGymMemberCommand("37493472"));
const receiver = new DoorSOCReceiver();
invoker.setOnFinish(new OpenGymDoorComplexCommand(receiver));

invoker.checkInMemberAndOpenDoorRemotely();
