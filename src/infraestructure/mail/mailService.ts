import Mail from "./mail";

export default interface MailService{
    send(mail: Mail): Promise<void>
}