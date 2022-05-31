import { Router } from "express";
import UserRepository from "../../domain/repository/userRepository";

export default interface IUserRoute    {
     getRouters(userRepository:UserRepository): Promise<Router>
}