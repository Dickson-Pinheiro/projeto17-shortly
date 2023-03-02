import { nanoid } from "nanoid"
import { db } from "../database/database.js"

export const urlController = {

    async createShotUrl(req, res) {
        const { url } = req.body
        const { userId } = res.locals
        const shortUrl = nanoid(10);

        const query = 'insert into urls (url, "shortUrl", "userId") values ($1, $2, $3);'

        try {
            await db.query(query, [url, shortUrl, userId])
        } catch (error) {
            console.log(error)
            res.status(500).send()
        }
    },

    async getUrl(req, res) {
        const { id } = req.params;
        const query = 'select id, "shortUrl", url from urls where id=$1;'
        try {
            const urlData = await db.query(query, [id])
            if (!urlData.rows[0]) {
                return res.status(404).send()
            }
            res.send(urlData.rows[0]);
        } catch (error) {
            console.log(error)
            res.status(500).send()
        }
    },

    async openUrl(req, res) {
        const { shortUrl } = req.params;
        const query = 'select url, "visitCount" from urls where "shortUrl" = $1;'

        try {
            const urlData = await db.query(query, [shortUrl])
            if (!urlData.rows[0]) {
                return res.status(404).send();
            }
            const visitTotal = urlData.rows[0].visitCount
            const urlRedirect = urlData.rows[0].url

            const queryUpdateVisit = 'update urls set "visitCount" = $1 where "shortUrl"=$2;'
            await db.query(queryUpdateVisit, [visitTotal + 1, shortUrl])

            res.redirect(urlRedirect)

        } catch (error) {
            console.log(error)
            res.status(500).send()
        }
    },

    async deleteUrl(req, res) {
        const { userId } = res.locals
        const { id: urlId } = req.params;



        try {
            const query = 'select "userId" from urls where id=$1;'
            const urlData = await db.query(query, [urlId]);

            if (!urlData.rows[0]) {
                res.status(404).send()
            }

            if (userId !== urlData.rows[0].userI) {
                res.status(401).send()
            }

            const deleteQuery = 'delete from urls where id=$1;'
            await db.query(deleteQuery, [urlId])
                res.status(204).send()

        } catch (error) {
            console.log(error)
            res.status(500).send()
        }

    }
}