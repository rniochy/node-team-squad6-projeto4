import UserRepository from "../../domain/repository/userRepository";
import Http from "../http/http";
import MailService from "../mail/mailService";
import MailRoutes from "../routes/mail.routeAdapater";

export default class MailControler {
        constructor(private http: Http, private mailService: MailService) {
                const mailRoutes = new MailRoutes()
                http.on('/email', mailRoutes.getRouters(mailService))
        }
}