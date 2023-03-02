import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { userRouter } from "./router/user.routes.js";
import { urlRouter } from "./router/urlRouter.routes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json())

app.use([userRouter, urlRouter])

const PORT = process.env.PORT || 5000;

app.listen(PORT);