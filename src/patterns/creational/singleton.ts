// Singleton
// Ensure a class has only one instance and provide a global point of access to it.

export class DatabaseConnector {
  private static instance: DatabaseConnector;
  private constructor() {
    return;
  }

  public static getInstance(): DatabaseConnector {
    if (!DatabaseConnector.instance) {
      DatabaseConnector.instance = new DatabaseConnector();
    }

    return DatabaseConnector.instance;
  }
}
