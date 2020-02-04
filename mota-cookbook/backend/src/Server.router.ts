import { Express } from 'express';
import MainControllerRouter from './Routes/MainControllerRouter';
import IAppRouter from './Models/Router.model';

export default class ServerRouter{
    routers:any;


    constructor(private app: Express){
        this.routers = {};
    }

    buildRoutes(): void{
        this.routers ={
            mainRoute: new MainControllerRouter(this.app)
        };
    }

}