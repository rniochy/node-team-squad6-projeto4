import ExpressAdapter from '../src/infraestructure/http/ExpressAdapter';
import UserControler from './infraestructure/controllers/user.controler';
import PgPromiseConnectionAdapter from './infraestructure/database/PgPromiseConnectionAdapter';
import UserRepositoryDataBase from './infraestructure/repository/database/userRepositoryDataBase';
import express from 'express'
import SendGridMailService from './infraestructure/mail/sendGridMailService';
import config from './infraestructure/config/config';
import MailControler from './infraestructure/controllers/mail.controler';

const http = new ExpressAdapter();
const connection = new PgPromiseConnectionAdapter();

const userRepository = new UserRepositoryDataBase(connection);
new UserControler(http, userRepository);

const mailService = new SendGridMailService();
new MailControler(http, mailService);

const PORT = config.PORT || 3000
http.listen(PORT)