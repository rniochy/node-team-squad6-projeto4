import User from "../domain/entinty/user";
import UserRepository from "../domain/repository/userRepository";

export default class CreateUser {

    constructor (private userRepository: UserRepository ){
}

   async perform({fullname, email, password}: TUser){
        console.log(fullname , email, password)
        const user = new User(fullname, email, password);
        await  this.userRepository.create(user) 
    }
}

type TUser = {
    fullname:string, email:string, password:string
} 