import type {
    NextApiRequest as Request,
    NextApiResponse as Response,
} from "next";

const pingDatabase = async (_req: Request, res: Response) => {
    res.status(200).json("ping");
};

export default pingDatabase;
