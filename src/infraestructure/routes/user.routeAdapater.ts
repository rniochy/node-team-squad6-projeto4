import { Router, Request, Response } from "express";
import IUserRoute from "./user.route";
import CreateUser from "../../application/createUser";
import { generateToken } from "../middlewares/auth";
import UserRepository from "../../domain/repository/userRepository";
import passwordhash from "../middlewares/hashpassword/passwordhash";
import PasswordhashAdapter from "../middlewares/hashpassword/passwordhashAdapter";



export default class UserRoutes implements IUserRoute{
   passwordhash: passwordhash;

   constructor(){
      this.passwordhash = new PasswordhashAdapter()
   }
   async getRouters(userRepository:UserRepository):Promise<Router> {
         const router = Router()
         router.post('/create', async (req: Request, res: Response)=>{
             try {
                const {fullname, email, password: passwordToHash} = req.body
                const createUser =  new CreateUser(userRepository)

                const valueToCompare = undefined
                console.log(req.body, fullname)
                if((fullname == undefined) || (email == undefined)  || (passwordToHash == undefined)) 
                 return res.status(400).send({error: "Every field are required!"}) 
                
                const  userExist = await userRepository.getUser(email)
                const id:string = this.generateID()
                const salt = await  this.passwordhash.genSalt(12)
                const password = await this.passwordhash.hashPassword(passwordToHash, salt)
                
                if(userExist) return res.status(400).send({msg: "User already Exist!"})



               createUser.perform({id, fullname, email, password})
                        .then(result => res.status(200).send({sucess: "user created!"})) 
                        .catch(err=> res.status(400).send({error: "Didn't create user!"}))
             }catch(err){
                  res.status(500).send({error: "User dont't created"})
            }
                 
            })

            router.post('/login', async (req: Request, res: Response)=>{
               const {email, password} = req.body

               const userExist = await userRepository.getUser(email)

               if(!userExist) res.status(400).send({error: "User don't exist!"})

                const compareResult = await this.passwordhash.comparePassword(password, userExist.password)

               if(compareResult){
                  const token = generateToken(userExist)
                  userExist.password = ""
                  res.status(200).send({userExist, token})
               } else {
                   res.status(400).send({error: "The password is incorrect"})
               }
            })

     return router     
}

   generateID (): string {
      return Math.random().toString(36).substring(2, 20) 
               + Math.random().toString(36).substring(2, 20)
 }


} 
