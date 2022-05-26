import { Router } from "express";
import UserRepository from "../../domain/repository/userRepository";
import UserControler from "../controllers/user.controler";

export default interface IUserRoute    {
     getRouters(userRepository:UserRepository): Promise<Router>
}