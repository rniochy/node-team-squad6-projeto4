export default interface IPasswordHash {
    genSalt(salt: number): Promise<string>
    hashPassword(password: string, salt: String): Promise<string>
    comparePassword(currentPassword:string,otherPassword: string ) : Promise<Boolean>
}