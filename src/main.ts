import ExpressAdapter from '../src/infraestructure/http/ExpressAdapter';
import UserControler from './infraestructure/controllers/user.controler';
import PgPromiseConnectionAdapter from './infraestructure/database/PgPromiseConnectionAdapter';
import UserRepositoryDataBase from './infraestructure/repository/database/userRepositoryDataBase';
import express from 'express'

const http = new ExpressAdapter();
const connection  = new PgPromiseConnectionAdapter();

const userRepository = new UserRepositoryDataBase(connection);
new UserControler(http, userRepository);

const PORT = process.env.PORT || 3000 
http.listen(PORT)