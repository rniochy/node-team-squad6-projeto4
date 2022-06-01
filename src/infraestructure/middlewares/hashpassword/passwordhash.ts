export default interface IPasswordHash {
    genSalt(salt: number): Promise<String>
    hashPassword(password: string, salt: String): Promise<String>
    comparePassword(currentPassword:string,otherPassword: string ) : Promise<Boolean>
}