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

                console.log(userExist.email)
                createUser.perform({fullname, email, password})
                        .then(result => res.status(200).send({sucess: "user createted!"})) 
                        .catch(err=> res.status(400).send({error: "Didn't create user!"}))

             } catch(err){ res.status(500).send({error: "Error to create user"})}            
            })

     return router     
}


} 
