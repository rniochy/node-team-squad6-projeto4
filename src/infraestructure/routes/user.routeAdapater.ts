import { Router, Request, Response } from "express";
import IUserRoute from "./user.route";
import CreateUser from "../../application/createUser";
import UserRepository from "../../domain/repository/userRepository";


export default class UserRoutes implements IUserRoute{
   async getRouters(userRepository:UserRepository):Promise<Router> {
         const router = Router()
         router.post('/create', (req: Request, res: Response)=>{
             try {
                    const {fullname, email, password} = req.body
                    const createUser =  new CreateUser(userRepository)
                    
                        createUser.perform({fullname, email, password})
                        .then(result => res.status(200).send({sucess: "user createted!"})) 
                        .catch(err=> res.status(400).send({error: "Didn't create user!"}))

             } catch(err){ res.status(500).send({error: "Error to create user"})}            
            })

        router.post('/a', (req: Request, res: Response)=>{
                console.log(req.body)
                return res.send("Result A")
     });
     return router     
}


} 


// const router = Router()
// router.post('/u', (req: Request, res: Response)=>{
//                console.log(req.body)
//                return res.send("Result")
//     });
// export  router 
