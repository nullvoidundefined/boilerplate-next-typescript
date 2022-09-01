import type {
    NextApiRequest as Request,
    NextApiResponse as Response,
} from "next";
import { authSignIn } from "../../../src/service";

const signInRoute = async (req: Request, res: Response) => {
    const {
        method,
        query: { userName, password },
    } = req;

    switch (method) {
        case "GET":
            try {
                await authSignIn(userName as string, password as string).then(
                    (result) => {
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
