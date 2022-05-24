import Mail from "../infraestructure/mail/mail";
import MailService from "../infraestructure/mail/mailService";

export default class SendEmail{
    constructor(private mailService: MailService){}

    async perform(mail: Mail): Promise<void>{
        await this.mailService.send(mail)
    }
}