


export type ServerStatus = 'stopped_services' | 'down' | 'ok';
export interface IServer {
  name: string;
  status: ServerStatus;
}
