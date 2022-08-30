import type {
    NextApiRequest as Request,
    NextApiResponse as Response,
  } from "next";
  
  const editProposal = async (req: Request, res: Response) => {
    try {
      res.status(200);
    } catch (error) {
      res.status(500).json(error);
    }
  };
  
  export { editProposal };
  