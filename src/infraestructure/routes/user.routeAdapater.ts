import { Router, Request, Response } from "express";
import IUserRoute from "./user.route";
import User from "../../domain/entinty/user";
import CreateUser from "../../application/createUser";
import UserRepository from "../../domain/repository/userRepository";


export default class UserRoutes implements IUserRoute{
    getRouters(userRepository:UserRepository): Router {
         const router = Router()
         router.post('/create', (req: Request, res: Response)=>{
             try {
                    const {fullname, email, password} = req.body

                    const createUser =  new CreateUser(userRepository)
                     createUser.perform({fullname, email, password}).then(result => {res.status(200).send({sucess: result})}).catch(err=> { res.status(400).send({er:err.name})}) 


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
