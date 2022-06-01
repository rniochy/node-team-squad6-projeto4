export default interface IPasswordHash {
    genSalt(salt: number): Promise<String>
    hashPassword(password: string, salt: string): Promise<string>
    comparePassword(currentPassword:string,otherPassword: string ) : Promise<Boolean>
}