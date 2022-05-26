import UserRepository from "../../domain/repository/userRepository";
import Http from "../http/http";
import UserRoutes from "../routes/user.routeAdapater";

export default class UserControler {
        constructor(private http:Http, private userRepository: UserRepository ){
                (async ()=> {
                        const userRoutes  = new UserRoutes()
                        http.on('/user',   await userRoutes.getRouters(userRepository)) 
                })()     
        }     
}