import type {
    NextApiRequest as Request,
    NextApiResponse as Response,
} from "next";

import { getProposalViaDatabase } from "../../../src/service";
import { RequestResult } from "../../../src/type";

const proposalsEditRoute = async (req: Request, res: Response) => {
    const { method, query } = req;
    const { id } = query;

    switch (method) {
        case "GET":
            try {
                await getProposalViaDatabase(id as string).then(
                    (result: RequestResult) => {
                        const { data, success } = result;
                        if (success) {
                            res.status(200).json(data);
                        } else {
                            res.status(401).json("Unauthorized");
                        }
                    }
                );
            } catch (error) {
                res.status(500).json(error);
            }
            break;
        default:
            res.setHeader("Allow", ["GET"]);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
};

export default proposalsEditRoute;
