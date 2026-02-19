import type { Request, Response } from "express";
import { prisma } from "../db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).json({ message: "email e senha obrigatorios" });
      return;
    }
    const user = await prisma.user.findFirst({
      where: { email },
    });
    if (!user) {
      res.status(404).json({ message: "usuario nao encontrado." });
      return;
    }
    const match = await bcrypt.compare(password, user?.password);

    if (!match) {
      res.status(401).json({ message: "Usuário / senha incorretos." });
      return;
    }
    const userInfo = {
      id: user.id,
      name: user.name,
      email: user.email,
      cep: user.cep,
      admin: user.admin,
    };
    if (!process.env.JWT_SECRET) {
      return;
    }
    const token = jwt.sign(userInfo, process.env.JWT_SECRET);
    console.log(token);
    res.cookie("user", token, {
      expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
      httpOnly: true,
    });
    res.status(200).json(userInfo);
  } catch (error) {
    res.status(500).json({ message: "erro no servidor" });
    return;
  }
};
export const cadastro = async (req: Request, res: Response) => {
  try {
    const { email, nome, cep, senha } = req.body;
    if (!nome || !senha || !cep || !email) {
      res.status(400).json({ message: "Campo obrigatório em branco." });
      return;
    }

    const hash = await bcrypt.hash(senha, 10);
    const user = await prisma.user.findFirst({
      where: { email: email },
    });
    if (user?.email) {
      res.status(409).json({ message: "email já cadastrado." });
      return;
    }
    const newUser = await prisma.user.create({
      data: { email: email, name: nome, password: hash, cep: cep },
    });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: "erro de servidor" });
    return;
  }
};
export const auth = async (req: Request, res: Response) => {
  try {
    const { user } = req;
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Erro de servidor" });
    return;
  }
};

export const logout = async (req: Request, res: Response) => {
  const { user } = req.cookies;

  if (user) {
    res.clearCookie("user");
    res.json({ message: "Deslogado." });
  }
  console.log(user);
};
