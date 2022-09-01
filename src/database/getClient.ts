import DatabaseClient from "serverless-postgres";

let databaseClient: DatabaseClient;

const getDatabaseClient = () => {
  if (!databaseClient) {
    // TODO confirm that this works as a one-time init.
    databaseClient = new DatabaseClient({
      database: process.env.DB_NAME,
      debug: true,
      delayMs: 3000,
      host: process.env.DB_HOST,
      password: process.env.DB_PASSWORD,
      port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : undefined,
      ssl: {
        rejectUnauthorized: false,
      },
      user: process.env.DB_USER,
    });
  }
  return databaseClient;
};

export { getDatabaseClient };
