import { getDatabaseClient } from "./getClient";

import type {
    NextApiRequest as Request,
    NextApiResponse as Response,
} from "next";
import {
    initializeDefaultUserQuery,
    initializeProposalsTableQuery,
    initializeUsersTableQuery,
} from "../constant";

const initializeDatabaseTables = async (_req: Request, res: Response) => {
    try {
        const client = getDatabaseClient();
        await client.connect();
        await client.query(initializeUsersTableQuery);
        await client.query(initializeDefaultUserQuery);
        await client.query(initializeProposalsTableQuery);
        await client.clean();
        console.log("initializeTablesQuery success");
        res.status(200).json("Tables created");
    } catch (error) {
        res.status(500).json(error);
    }
};

export { initializeDatabaseTables };
