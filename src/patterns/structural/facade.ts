// Facade
// Provide a unified interface to a set of interfaces in a subsystem. Facade defines a higher-level interface that makes the subsystem easier to use.

class GymVendingMachineInternalController {
  // This class contains complicated internal functions which handle low level vending machine logic.
  validateInsertedCoinWithMDBBus(): void {
    return;
  }
  readRAMForVendingMachineItem(itemId: number): void {
    return;
  }
  updateInventoryInternally(): void {
    return;
  }
  dispenseItem(): void {
    return;
  }
}

class GymVendingMachineFacade {
  internalController = new GymVendingMachineInternalController();
  // The facade offers simple high level methods to the client.
  orderItemId(itemId: number) {
    this.internalController.validateInsertedCoinWithMDBBus();
    this.internalController.readRAMForVendingMachineItem(itemId);
    this.internalController.updateInventoryInternally();
    this.internalController.dispenseItem();
  }
}

const vendingMachine = new GymVendingMachineFacade();
vendingMachine.orderItemId(3);
