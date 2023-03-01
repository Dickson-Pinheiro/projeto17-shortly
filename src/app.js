import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { userRouter } from "./router/user.routes.js";

dotenv.config();

const app = express();
app.use(cors());

app.use([userRouter])

const PORT = process.env.PORT || 5000;

app.listen(PORT);