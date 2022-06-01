import IPasswordHash from "./passwordhash";

export default class PasswordhashAdapter implements IPasswordHash {
    genSalt(salt: number): Promise<String> {
        throw new Error("Method not implemented.");
    }
    hashPassword(password: string, salt: string): Promise<string> {
        throw new Error("Method not implemented.");
    }
    comparePassword(currentPassword: string, otherPassword: string): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }

}