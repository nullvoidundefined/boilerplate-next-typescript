import type {
    NextApiRequest as Request,
    NextApiResponse as Response,
} from "next";
import { authSignUp } from "../../../src/service";

const signInRoute = async (req: Request, res: Response) => {
    const { method } = req;

    switch (method) {
        case "POST":
            await authSignUp(req, res);
            break;
        default:
            res.setHeader("Allow", ["POST"]);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
};

export default signInRoute;
