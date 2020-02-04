
import { inspect } from 'util';

export default class AppLogger{
    static active: boolean = false;

    static log(message: string, value: any){
        if( this.active ){
            console.log( message, inspect(value, { depth: null, colors: true }) );
        }
    }
}