import { Router } from "express";

const userRouter = Router();

userRouter.post("/signin", (req, res) => {
    res.send("ok")
})
userRouter.post("/signup", (req, res) => {
    res.send("ok")
})
userRouter.get("/user/me", (req, res) => {
    res.send("ok")
})
userRouter.get("ranking", (req, res) => {
    res.send("ok")
})

export {userRouter}