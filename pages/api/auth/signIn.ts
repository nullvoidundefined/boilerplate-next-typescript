import type {
    NextApiRequest as Request,
    NextApiResponse as Response,
} from "next";
import { authSignIn } from "../../../src/service";
import { RequestResult } from "../../../src/type/http";

const signInRoute = async (req: Request, res: Response) => {
    const {
        method,
        query: { username, password },
    } = req;

    switch (method) {
        case "GET":
            try {
                await authSignIn(username as string, password as string).then(
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

export default signInRoute;
