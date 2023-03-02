import joi from "joi"

export const urlSchema = joii.object({
    url: joi.string().uri().required()
})