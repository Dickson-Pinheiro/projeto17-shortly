import { nanoid } from "nanoid"

export const urlController = {

    createShotUrl(req, res){
        const {url} = req.body
        const {userId} = res.locals
        const shortUrl = nanoid(10);

        /* insert into urls (url, "shortUrl", "userId") values (url, shortUrl, userId);*/
    },

    getUrl(req, res){
        const {id} = req.params;

        /* select id, "shotUrl", "url" from urls where id=${0}; id*/
    },

    openUrl(req, res){
        const {shortUrl} = req.params;

        /* select url from urls where "shortUrl" = ${0}; shortUrl  */
        res.redirect("https://google.com")
    },

    deleteUrl(req, res){
        const {userId} = res.locals
        const {id: urlId}= req.params;

        /* select * from urls where id=urlId */
        res.status(204).send()
    }
}