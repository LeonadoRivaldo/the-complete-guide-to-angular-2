
import express, {Express} from 'express';
import { config } from 'dotenv';
import http from 'http';
import { } from 'mongoose';
import connect from './DbConnector';

//APP IMPORTS
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

app.use(function (err: any, req: any, res: any, next: any) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })

app.on("error", ( event )=> console.log( event ));

const db = 'mongodb://localhost:27017/mcb';
connect(db);

//SERVER START
server.listen(env.PORT, ()=>{
    console.log( `server started @ PORT:${env.PORT}` );
})