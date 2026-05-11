import type { Request, Response } from "express";
import { prisma } from "../db.js";

export async function getCartItems(req: Request, res: Response) {
  try {
    const { user } = req;
    console.log(user);
    const cartItems = await prisma.cartItem.findMany({
      where: { userId: user.id },
      include: { user: true, product: true },
    });
    res.json(cartItems);
  } catch (error) {
    res.status(500).json({ message: "erro de servidor" });
    return;
  }
}
