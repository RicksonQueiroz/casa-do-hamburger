import express from "express";
import cors from "cors";
import { route } from "./src/controller/rotas.js";
import cookieParser from "cookie-parser";

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);
app.use(cookieParser());
app.use(express.json());
app.use(route);
app.listen(3000, () => {
  console.log("rodando");
});
