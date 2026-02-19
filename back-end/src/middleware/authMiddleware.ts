import type { NextFunction, Request, Response } from "express";
import Jwt from "jsonwebtoken";

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { user } = req.cookies;

    if (!process.env.JWT_SECRET) {
      res.status(500).json({ message: "Erro no servidor." });
      return;
    }
    const decoded = Jwt.verify(user, process.env.JWT_SECRET);

    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: "Usuário não autenticado" });
    return;
  }
};
