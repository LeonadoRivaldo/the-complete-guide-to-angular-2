import MainController from "../Controllers/MainController";
import { Express } from 'express';
import IAppRouter from "../Models/Router.model";
import AppLogger from "../Utils/Logger";

export default class MainControllerRouter implements IAppRouter{
    controller: MainController;

    constructor(
        private app: Express
    ){
        this.controller = new MainController();
        this.GETRoutes();
    }

    GETRoutes(): void {
        this.app.get("/", this.controller.welcome);
        this.app.get("/index", this.controller.welcome);
    }
}