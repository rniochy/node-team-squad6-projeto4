import { compare } from "bcrypt"
import PasswordhashAdapter from "../src/infraestructure/middlewares/hashpassword/passwordhashAdapter"

describe("Test  bcrypt", ()=>{
    it("should be generate salt", async()=>{
         const passwordhashAdapter = new PasswordhashAdapter()
         const salt = await passwordhashAdapter.genSalt(12)
         expect(salt).not.toBeNull()
    })
    it("should be hash password", async()=>{
        const passwordhashAdapter = new PasswordhashAdapter()
        const salt = await passwordhashAdapter.genSalt(12)
        const hashPassword = await passwordhashAdapter.hashPassword("12LM{-3", salt as string)
        expect(hashPassword).not.toBeNull()
   })
    it("should be compare password", async()=>{
        const passwordhashAdapter = new PasswordhashAdapter()
        const salt = await passwordhashAdapter.genSalt(12)
        const hashPassword = await passwordhashAdapter.hashPassword("12LM{-3", salt as string)
        const password ="12LM{-3"
        expect(await passwordhashAdapter.comparePassword(password, hashPassword)).toBe(true)
   })
})