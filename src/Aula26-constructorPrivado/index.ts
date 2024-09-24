// Singleton - Gof | Factory Method - GoF
export class Database {
  private static database: Database;

  private constructor(
    private host: string,
    private user: string,
    private password: string
  ) {}

  connect(): void {
    console.log(`Conectado em ${this.host} no user: ${this.user}`)
  }
  // FACTORY METHOD
  static getDataBase(
    host: string,
    user: string,
    password: string
  ): Database {
    if (Database.database) return Database.database
    Database.database = new Database(host, user, password);
    return Database.database;
  }
}

const db1 = Database.getDataBase('Localhost', 'Biel', '12346');

db1.connect();

const db2 = Database.getDataBase('localhost', 'user2', '123456');

db2.connect();
