import type { Request, Response } from "express";
import { prisma } from "../db.js";

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await prisma.product.findMany({
      select: {
        name: true,
        id: true,
        price: true,
        description: true,
        image: true,
        category: true,
      },
    });

    if (products.length == 0) {
      res
        .status(404)
        .json({ message: "Nenhum produto encontrado na base de dados." });
      return;
    }

    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Erro de servidor" });
    return;
  }
};
