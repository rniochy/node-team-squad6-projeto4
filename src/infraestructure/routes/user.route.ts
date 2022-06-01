import { Router } from "express";
import UserRepository from "../../domain/repository/userRepository";
import IPasswordHash from "../middlewares/hashpassword/passwordhash";

export default interface IUserRoute    {
     passwordhash: IPasswordHash
     getRouters(userRepository:UserRepository): Promise<Router>
}