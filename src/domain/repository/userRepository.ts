import User from '../entinty/user'


export default interface UserRepository {
      create(user:User) : Promise<void>
      getUser(email:string) : Promise<User> 
}