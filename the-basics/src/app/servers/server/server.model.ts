


export type ServerStatus = 'stopped_services' | 'down' | 'ok' | 'offline';
export interface IServer {
  name: string;
  status?: ServerStatus;
}

export class Server implements IServer {
  name: string;
  status?: ServerStatus;

  constructor( name: string, status?: ServerStatus ) {
    this.name = name;
    this.status = status || 'ok';
  }

}
