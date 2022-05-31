import ExpressAdapter from '../src/infraestructure/http/ExpressAdapter';
import UserControler from './infraestructure/controllers/user.controler';
import PgPromiseConnectionAdapter from './infraestructure/database/PgPromiseConnectionAdapter';
import UserRepositoryDataBase from './infraestructure/repository/database/userRepositoryDataBase';
import SendGridMailService from './infraestructure/mail/sendGridMailService';
import MailControler from './infraestructure/controllers/mail.controler';

const PORT = process.env.PORT
const http = new ExpressAdapter();
const connection = new PgPromiseConnectionAdapter();

const userRepository = new UserRepositoryDataBase(connection);
new UserControler(http, userRepository);

const mailService = new SendGridMailService();
new MailControler(http, mailService);

http.listen(PORT)