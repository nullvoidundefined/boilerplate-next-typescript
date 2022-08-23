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
        const user = { id: "9999999999", name: "Bob" };
        res.status(200).json(user);
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
