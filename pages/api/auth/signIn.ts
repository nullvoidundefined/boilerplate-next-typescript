import type {
  NextApiRequest as Request,
  NextApiResponse as Response,
} from "next";

const signIn = (req: Request, res: Response) => {
  const {
    query: { password },
    method,
  } = req;

  switch (method) {
    case "GET":
      if (password === "Bob") {
        const sessionId = "ePpxd8sQwa0Sow5YRU8QFp4oMiqGbw4l"
        res.status(200).json(sessionId);
      } else {
        res.status(401).json("User unauthorized");
      }
      break;
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};

export default signIn;
