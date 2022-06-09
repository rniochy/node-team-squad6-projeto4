import User from "../domain/entinty/user";
import UserRepository from "../domain/repository/userRepository";

export default class AlterUserPassowrd {
    constructor(private userRepository: UserRepository){}
    async perform(user: User){
        await this.userRepository.alterPassword(user)
        return
    }
}