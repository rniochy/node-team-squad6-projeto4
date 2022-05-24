import Mail from "./mail";
import MailService from "./mailService";
import SendGridClient from "./sendGridClient";

export default class SendGridMailService implements MailService {
    private sendGridClient: SendGridClient;

    constructor() {
        if (process.env.SENDGRID_API_KEY) {
            this.sendGridClient = new SendGridClient(process.env.SENDGRID_API_KEY);
        } else {
            throw new Error("Missing SENDGRID_API_KEY environment variable");
        }
    }

    async send(mail: Mail): Promise<void> {
        try {
            await this.sendGridClient.sendEmail(mail);
        } catch (error: any) {
            throw new Error(error);
        }
    }
}