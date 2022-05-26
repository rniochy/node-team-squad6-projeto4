import Mail from "./mail";
import MailService from "./mailService";
import sgMail from "@sendgrid/mail";
import config from "./../config/config";

export default class SendGridMailService implements MailService {

    constructor() {
        if (config.SENDGRID_API_KEY) {
            sgMail.setApiKey(config.SENDGRID_API_KEY);;
        } else {
             console.log("SENDGRIND API KEY required!")
        }
    }

    async send(mail: Mail): Promise<void> {
        const msg = {
            to: mail.to,
            from: mail.from,
            subject: mail.subject,
            text: mail.body,
            html: mail.body
        };

        await sgMail.send(msg);
    }
}