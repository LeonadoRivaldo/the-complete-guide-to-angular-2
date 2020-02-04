
import express, {Express} from 'express';
import dotenv, { config } from 'dotenv';
import http from 'http';
import IEnv from './Models/Env.model';
import AppLogger from './Utils/Logger';
import AppRouter from './Server.router';


const app: Express = express();
const server = http.createServer(app);

//ENV CONFIG
const env: IEnv = (config().parsed as IEnv);

//SERVER CONFIG
AppLogger.active = !!env.DEV;


const router = new AppRouter(app);
router.buildRoutes();

//SERVER START
server.listen(env.PORT, ()=>{
    console.log( `server started @ PORT:${env.PORT}` );
})