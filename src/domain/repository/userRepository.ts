import User from '../entinty/user'


export default interface UserRepository {
      create(user: User) : Promise<void>
      getUser(email:string) : Promise<User> 
      alterName(userdata : UserData) : Promise<void>
      alterPassword(userdata: UserData) : Promise<void>
}

type UserData = {
      id?: string,
      fullname?: string,
      email?: string,
      password?: string
  }