import { Router } from "express";
import { userController } from "../controller/userController.js";
import { validateToken } from "../middlewares/validateToken.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import { loginSchema } from "../schemas/loginSchema.js";
import { userSchema } from "../schemas/userSchema.js";

const userRouter = Router();

userRouter.post("/signin", validateSchema(loginSchema), userController.signin)
userRouter.post("/signup", validateSchema(userSchema), userController.signup)
userRouter.get("/users/me", validateToken, userController.getUser)
userRouter.get("/ranking", userController.getRanking)

export {userRouter}