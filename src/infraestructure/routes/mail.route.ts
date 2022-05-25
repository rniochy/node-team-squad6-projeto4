import { Router } from "express";
import MailService from "../mail/mailService";

export default interface IMailRoute {
    getRouters(mailService: MailService): Router
}