//* Libraries imports
import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

//* Import variables
import env from "../variables";

export function isAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authToken = req.headers.authorization;

  if (!authToken) {
    return res.status(401).end();
  }

  const [, token] = authToken.split(" ");

  try {
    const { sub } = verify(token, env.JWT_SECRET);

    const tmpSub = typeof sub === "string" ? sub : sub.toString();

    req.cartao_id = tmpSub;

    return next();
  } catch (err) {
    return res.status(401).end("Compra Não Autorizada").json;
  }
}
