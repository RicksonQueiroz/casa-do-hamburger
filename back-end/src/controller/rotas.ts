import { Router } from "express";
import { auth, cadastro, login, logout } from "./user-controller.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { deleteProduct, getProducts } from "./product-controller.js";

export const route = Router();
// rotas de usuário
route.post("/login", login);

route.post("/cadastro", cadastro);

route.get("/me", authMiddleware, auth);

route.post("/logout", authMiddleware, logout);

// rotas de produto
route.get("/product", getProducts);
route.delete("/delete-product/:id", authMiddleware, deleteProduct);
