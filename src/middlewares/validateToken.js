import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config()

export function validateToken(req, res, next){
    let {authorization: token} = req.headers
    
    if(!token){
        res.status(401).send({message: "invalid token"})
    }
    token = token.replace("Bearer ","")
    
    jwt.verify(token, "batata", (err, decoded) => {
        if(err){
            res.status(401).send({message: "Invalid token"})
        }
        res.locals.userId = decoded.userId
    })
    next()
}