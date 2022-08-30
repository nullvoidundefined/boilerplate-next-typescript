import type {
  NextApiRequest as Request,
  NextApiResponse as Response,
} from "next";
import { createProposal, getProposals } from "../../../src/service";

const proposalRoute = async (req: Request, res: Response) => {
  const { method } = req;

  switch (method) {
    case "GET":
      await getProposals(req, res);
      break;
    case "POST":
      await createProposal(req, res);
      break;
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};

export default proposalRoute;
