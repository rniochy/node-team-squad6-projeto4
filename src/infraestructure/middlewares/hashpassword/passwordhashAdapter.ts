import IPasswordHash from "./passwordhash";
import bcrypt from 'bcrypt'

export default class PasswordhashAdapter implements IPasswordHash {
   async genSalt(valueTosalt: number): Promise<String> {
       const salt = await bcrypt.genSalt(valueTosalt);
       return salt     
    }
    async hashPassword(password: string, salt: string): Promise<string> {
            const hashpassword = await bcrypt.hash(password, salt); 
            return hashpassword
    }
    async comparePassword(currentPassword: string, otherPassword: string): Promise<Boolean> {
            const isEqualPassword = await bcrypt.compare(currentPassword, otherPassword);
            return isEqualPassword
    }

}