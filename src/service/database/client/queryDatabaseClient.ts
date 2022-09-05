import { getDatabaseClient } from "./getDatabaseClient";

const queryDatabaseClient = async (query: string) => {
    const client = getDatabaseClient();
    await client.connect();
    const result = await client.query(query);
    await client.clean();
    return result;
};

export { queryDatabaseClient };
