import type {
  NextApiRequest as Request,
  NextApiResponse as Response,
} from "next";

const authSignOut = async (req: Request, res: Response) => {
  try {
    res.status(200);
  } catch (error) {
    res.status(500).json(error);
  }
};

export { authSignOut };
