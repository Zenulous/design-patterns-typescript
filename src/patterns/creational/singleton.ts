// Singleton
// Ensure a class has only one instance and provide a global point of access to it.

export class GymDatabaseConnector {
  private static instance: GymDatabaseConnector;
  private constructor() {
    return;
  }

  public static getInstance(): GymDatabaseConnector {
    if (!GymDatabaseConnector.instance) {
      GymDatabaseConnector.instance = new GymDatabaseConnector();
    }

    return GymDatabaseConnector.instance;
  }
}
