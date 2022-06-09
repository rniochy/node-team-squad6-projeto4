import UserRepository from "../domain/repository/userRepository";
import User from "../domain/entinty/user";

export class AlterUserName {
    constructor(private userRepository: UserRepository){}
    async perform(user: User){
        await this.userRepository.alterName(user)
        return
    }
}