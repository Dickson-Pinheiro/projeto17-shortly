import { Router } from "express";

const urlRouter = Router()

urlRouter.post("/urls/shorten", (req, res) => {
    res.send("ok")
})
urlRouter.get("/urls/:id", (req, res) => {
    res.send("ok")
})
urlRouter.get("/urls/open/:shortUrl",(req, res) => {
    res.send("ok")
})
urlRouter.delete("/urls/:id", (req, res) => {
    res.send("ok")
})

export {urlRouter}