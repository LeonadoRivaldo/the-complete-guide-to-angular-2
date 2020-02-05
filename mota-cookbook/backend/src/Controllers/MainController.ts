import { Request, Response } from 'express';
import IAppController from '../Models/Controller.model';


export default class MainController implements IAppController{
    welcome(req: Request, res:Response): void{
        res.json({ welcomeMessage: `Welcome! to this backend 😎` });
    }
}