import UserRepository from "../domain/repository/userRepository";

export class AlterUserName {
    constructor(private userRepository: UserRepository){}
    async perform(userdata: UserData){
        await this.userRepository.alterName(userdata)
        return
    }
}

type UserData = {
    id: string,
    fullname: string
}