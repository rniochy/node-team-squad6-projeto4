import { Router, Request, Response } from "express";
import IUserRoute from "./user.route";
import CreateUser from "../../application/createUser";
import UserRepository from "../../domain/repository/userRepository";


export default class UserRoutes implements IUserRoute{
   async getRouters(userRepository:UserRepository):Promise<Router> {
         const router = Router()
         router.post('/create', async (req: Request, res: Response)=>{
             try {
                const {fullname, email, password} = req.body
                const createUser =  new CreateUser(userRepository)
                
                const  userExist = await userRepository.getUser(email)
                const id:string =
                 Math.random().toString(36).substring(2, 20) 
                 + Math.random().toString(36).substring(2, 20)
                
                
                if(userExist.email) return res.send({msg: "User already Exist!"})
                createUser.perform({id, fullname, email, password})
                        .then(result => res.status(200).send({sucess: "user created!"})) 
                        .catch(err=> res.status(400).send({error: "Didn't create user!"}))

             } catch(err){ 
                return res.status(500).send({error: "Error to create user"})
               }            
            })

     return router     
}


} 
