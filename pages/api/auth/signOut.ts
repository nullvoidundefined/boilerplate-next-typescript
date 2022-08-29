import type {
  NextApiRequest as Request,
  NextApiResponse as Response,
} from "next";
import { authSignOut } from "../../../src/service";

const signOutRoute = async (req: Request, res: Response) => {
  const { method } = req;

  switch (method) {
    case "POST":
      await authSignOut(req, res);
      break;
    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};

export default signOutRoute;
