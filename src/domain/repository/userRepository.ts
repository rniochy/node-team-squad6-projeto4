import User from '../entinty/user'
export interface userRepository {
      create(user:User) : Promise<void>
}