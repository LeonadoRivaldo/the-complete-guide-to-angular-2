import { Request, Response } from 'express';
import IAppController from '../Models/Controller.model';


export default class MainController implements IAppController{
    welcome(req: Request, res:Response): void{
        res.end("Welcome! to this backend");
    }
}