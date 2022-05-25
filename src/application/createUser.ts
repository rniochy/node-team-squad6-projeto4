import User from "../domain/entinty/user";
import UserRepository from "../domain/repository/userRepository";

export default class CreateUser {

    constructor(private userRepository: UserRepository) { }

    async perform({ fullname, email, password }: TUser) {
        const user = new User(fullname, email, password);
        const res = await this.userRepository.create(user)
        return res
    }
}

type TUser = {
    fullname: string,
    email: string,
    password: string
}