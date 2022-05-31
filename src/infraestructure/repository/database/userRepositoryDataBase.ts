import User from '../../../domain/entinty/user';
import UserRepository from '../../../domain/repository/userRepository'
import Connection from '../../database/Connectionn';

export default class UserRepositoryDataBase implements UserRepository {

    constructor(private connection:Connection){
        
    }
    async getUser(email_: string): Promise<User> {
        const user = await this.connection.query(`select email from users where email = '${email_}'`); 
        return user[0]
    } 
    async create(user: User): Promise<void> {
        const {fullname, email, password} = user
            await this.connection.query(`insert into users (fullname,email,password)  values ('${fullname}', '${email}','${password}')`)
         return
    }

}