import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config()

export const userController = {
    signup(req, res){
        const {name, email, password} = req.body
        
         const passwordHashed = bcrypt.hashSync(password, 6)
         /* select * from users where email = email;*/
         /*insert into users (name, email, password) values(name, email, passwordHashed); */

    },

    signin(req, res){
        const { email, password } = req.body

        const passwordHashed = ""

        const isCorrectPassword = bcrypt.compareSync(password, passwordHashed);

        if(!isCorrectPassword){
            res.status(400).send();
        }
        const token = jwt.sign({userId: ""}, process.env.SECRET, {expiresIn: "3h"})
        res.send({token});
    },

    getUser(req, res){
        const {userId} = res.locals

        /* SELECT json_build_object(
            "id", users.id,
            "name", users.name,
            "visitCount", sum(urls."visitCount"),
            "shortenedUrls", json_build_object(
                "id", urls.id,
                "shortUrl", urls."shortUrl",
                "url", urls.url,
                "visitCount", urls."visitCount"
                ) 
            ) FROM users JOIN urls ON users.id = urls.userId WHERE id=${0}; //userId
         */
    },

    getRanking(req, res){
        /* select users.id, users.name, count(urls.url) as "linksCount", sum(urls."visitCount") as "visitCount" from users
        join links on users.id = urls."userId" order by "visitCount" desc limit 4;*/
    }
}