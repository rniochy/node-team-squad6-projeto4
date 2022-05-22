import { Router, Request, Response } from "express";
import IUserRoute from "./user.route";


export default class UserRoutes implements IUserRoute{
    getRouters(): Router {
         const router = Router()
         router.post('/u', (req: Request, res: Response)=>{
                       console.log(req.body)
                       return res.send("Result U")
            });
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
