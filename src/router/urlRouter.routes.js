import { Router } from "express";
import { urlController } from "../controller/urlController.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import { validateToken } from "../middlewares/validateToken.js";
import { urlSchema } from "../schemas/urlSchema.js";

const urlRouter = Router()

urlRouter.post("/urls/shorten", validateToken, validateSchema(urlSchema), urlController.createShortUrl)
urlRouter.get("/urls/:id", urlController.getUrl)
urlRouter.get("/urls/open/:shortUrl", urlController.openUrl)
urlRouter.delete("/urls/:id", validateToken, urlController.deleteUrl)

export {urlRouter}