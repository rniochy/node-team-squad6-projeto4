import Mail from "./mail";
import sgMail from "@sendgrid/mail";

export default class SendGridClient {

    constructor(apiKey: string) {
        sgMail.setApiKey(apiKey);
    }

    async sendEmail(mail: Mail): Promise<void> {
        const msg = {
            to: mail.to,
            from: mail.from,
            subject: mail.subject,
            text: mail.body,
            html: mail.body
        };
        sgMail.send(msg);
    }
}