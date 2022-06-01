import User from '../../../domain/entinty/user';
import UserRepository from '../../../domain/repository/userRepository'
import Connection from '../../database/Connectionn';

export default class UserRepositoryDataBase implements UserRepository {

    constructor(private connection:Connection){
        
    }
    async getUser(email: string): Promise<User> {
        const user = await this.connection.query(`select email from users where email = '${email}'`); 
        return user[0]
    } 
    async create(user:User): Promise<void> {
        const {id,fullname, email, password } = user
        await this.connection.query(`insert into users (id, fullname,email,password) values ('${id}','${fullname}', '${email}','${password}')`)
         return
    }

}