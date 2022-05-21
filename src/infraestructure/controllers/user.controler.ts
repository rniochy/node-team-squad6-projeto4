import User from "../../domain/entinty/user";
import { Request, Response } from "express";
import UserRepository from "../../domain/repository/userRepository";
import Http from "../http/http";
import CreateUser from '../../application/createUser'

export default class UserControler {

        constructor(private http:Http, private userRepository: UserRepository ){
                http.on('post', '/user', async function(params:any, body:any) {
                        // const {fullname, email, password} = body

                        console.log(params, body)
                        // const createUser = new CreateUser(userRepository)
                        // const created = createUser.perform({fullname:"ro", email:"nn", password:"123"});
                });         
        }
        
         
        
    
    
}