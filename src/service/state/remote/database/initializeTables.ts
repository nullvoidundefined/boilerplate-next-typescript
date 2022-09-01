import { getDatabaseClient } from "../database/getClient";

import type {
    NextApiRequest as Request,
    NextApiResponse as Response,
} from "next";

const initializeDatabaseTables = async (_req: Request, res: Response) => {
    try {
        const initializeUsersTableQuery = `CREATE TABLE users (
		    created TIMESTAMP NOT NULL,
            email VARCHAR ( 255 ) UNIQUE NOT NULL,
            id serial PRIMARY KEY,
		    password VARCHAR ( 50 ) NOT NULL,
		    username VARCHAR ( 50 ) UNIQUE NOT NULL
	    );`;

        const initializeDefaultUserQuery = `
            INSERT INTO users(created, email, password, username) 
            VALUES (CURRENT_TIMESTAMP, 'root@root.com', 'swordfish', 'root');
        `;

        const initializeProposalsTableQuery = `CREATE TABLE users (
		    created TIMESTAMP NOT NULL,
            email VARCHAR ( 255 ) UNIQUE NOT NULL,
            id serial PRIMARY KEY,
		    password VARCHAR ( 50 ) NOT NULL,
		    username VARCHAR ( 50 ) UNIQUE NOT NULL
	    );`;

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
