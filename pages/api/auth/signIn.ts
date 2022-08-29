import type {
  NextApiRequest as Request,
  NextApiResponse as Response,
} from "next";
import { authSignIn } from "../../../src/service";

const signInRoute = async (req: Request, res: Response) => {
  const { method } = req;

  switch (method) {
    case "GET":
      await authSignIn(req, res);
      break;
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};

export default signInRoute;
