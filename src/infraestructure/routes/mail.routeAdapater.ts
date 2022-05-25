import { Router, Request, Response } from "express";
import SendEmail from "../../application/sendEmail";
import MailService from "../mail/mailService";
import Mail from "../mail/mail";
import IMailRoute from "./mail.route";

export default class MailRoutes implements IMailRoute {
    getRouters(mailService: MailService): Router {
        const router = Router()
        router.post('/', (req: Request, res: Response) => {
            try {
                const { to, from, subject, body } = req.body
                if (!to || !from || !subject || !body) {
                    return res.status(400).send({ error: "Missing parameters" })
                }

                const sendMail = new SendEmail(mailService)

                sendMail.perform(new Mail(from, to, subject, body))
                    .then(result => res.status(200).send({ sucess: "Email send with success!" }))
                    .catch(err => res.status(400).send({ error: "Error sending email!" + err }))

            } catch (err) { res.status(500).send({ error: "Error sending email!" }) }
        })

        return router
    }
}
