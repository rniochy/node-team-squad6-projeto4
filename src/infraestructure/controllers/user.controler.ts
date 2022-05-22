import UserRepository from "../../domain/repository/userRepository";
import Http from "../http/http";
import UserRoutes from "../routes/user.routeAdapater";
export default class UserControler {

        constructor(private http:Http, private userRepository: UserRepository ){
                const u = new UserRoutes()
                http.on('/users',   u.getRouters())        
        }     
}