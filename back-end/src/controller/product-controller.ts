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

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { user } = req;
    const { id } = req.params;
    const productId = Number(id);

    if (!user?.admin) {
      res.status(400).json({
        message: "Nào autorizado. Requer permissões de nível superior.",
      });
      return;
    }

    if (!id) {
      return res.status(400).json({ message: "ID é obrigatório." });
    }

    const deletedProduct = await prisma.product.delete({
      where: { id: productId },
    });

    console.log(deletedProduct);

    return res.status(200).json({
      message: "Produto deletado com sucesso",
      deletedProduct,
    });
  } catch (error: any) {
    if (error.code == "P2025") {
      return res.status(404).json({ message: "Produto não encontrado." });
    }

    return res.status(500).json({ message: "Erro de servidor." });
  }
};
