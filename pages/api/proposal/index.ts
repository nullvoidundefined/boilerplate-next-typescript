import type {
  NextApiRequest as Request,
  NextApiResponse as Response,
} from "next";
import { createProposal, deleteProposal, editProposal, getProposal  } from "../../../src/service";

const proposalRoute = async (req: Request, res: Response) => {
  const { method } = req;

  switch (method) {
    case "GET":
      await getProposal(req, res);
      break;
    case "POST":
      await createProposal(req, res);
      break;
    case "UPDATE":
      await editProposal(req, res);
      break;
    case "DELETE":
      await deleteProposal(req, res);
      break;
    default:
      res.setHeader("Allow", ["GET", "POST", "UPDATE", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};

export default proposalRoute;
