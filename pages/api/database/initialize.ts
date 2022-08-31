import type {
    NextApiRequest as Request,
    NextApiResponse as Response,
} from "next";
import { initializeDatabaseTables } from "../../../src/service";

const initializeDatabase = async (req: Request, res: Response) => {
    const { method } = req;

    switch (method) {
        case "GET":
            await initializeDatabaseTables(req, res);
            break;
        default:
            res.setHeader("Allow", ["GET"]);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
};

export default initializeDatabase;
