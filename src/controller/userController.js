import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import { db } from "../database/database.js"

dotenv.config()

export const userController = {
    async signup(req, res) {
        const { name, email, password } = req.body

        try {
            const query = 'select * from users where email=$1;'
            const userData = await db.query(query, [email])

            if (userData.rows[0]) {
                return res.status(409).send()
            }

            const passwordHashed = bcrypt.hashSync(password, 10)

            const queryCreateUser = 'insert into users (name, email, password) values($1, $2, $3);'
            await db.query(queryCreateUser, [name, email, passwordHashed])
            res.status(201).send()
        } catch (error) {
            console.log(error)
            res.status(500).send()
        }
    },

    async signin(req, res) {
        const { email, password } = req.body


        try {
            const query = 'select id, password from users where email=$1;'
            const userData = await db.query(query, [email])

            if (!userData.rows[0]) {
                return res.status(401).send()
            }

            const passwordHashed = userData.rows[0].password
            const userId = userData.rows[0].id

            const isCorrectPassword = bcrypt.compareSync(password, passwordHashed);

            if (!isCorrectPassword) {
                res.status(401).send();
            }
            const token = jwt.sign({ userId }, process.env.SECRET, { expiresIn: "3h" })
            return res.send({ token });
        } catch (error) {
            console.log(error)
            res.status(500).send()
        }

    },

    async getUser(req, res) {
        const { userId } = res.locals
        try {
            const query = `SELECT json_build_object(
                'id', users.id,
                'name', users.name,
                'visitCount', sum(urls."visitCount"),
                'shortenedUrls', array_agg(json_build_object(
                    'id', urls.id,
                    'shortUrl', urls."shortUrl",
                    'url', urls.url,
                    'visitCount', urls."visitCount"
                    ))
                ) FROM users JOIN urls ON users.id = urls."userId" WHERE users.id=$1 group by users.id;`

                const userData = await db.query(query, [userId])
                if(!userData.rows[0]){
                    const queryUser = "select id, name from users where id=$1;"
                    const userDataAlternative = await db.query(queryUser, [userId])
                    return res.send({
                        id: userDataAlternative.rows[0].id,
                        name: userDataAlternative.rows[0].name,
                        visitCount: 0,
                        shortenedUrls: []
                    })
                }
                return res.send({...userData.rows[0].json_build_object})
        } catch (error) {
         console.log(error)
         res.status(500).send()   
        }
        
    },

   async getRanking(req, res) {
        try {
            const query = `select users.id, users.name, count(urls.url) as "linksCount", sum(urls."visitCount") as "visitCount" from users join urls on users.id = urls."userId" group by users.id order by "visitCount" desc limit 10;`
            const rankingData = await db.query(query)
            res.send(rankingData.rows)
        } catch (error) {
            console.log(error)
            res.status.send(500)
        }
    }
}