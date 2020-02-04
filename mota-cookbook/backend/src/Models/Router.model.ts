import IAppController from "./Controller.model";

export default interface IAppRouter{
    controller: IAppController;
    GETRoutes?(): void;
    POSTRoutes?(): void;
    DELETERoutes?(): void;
    PUTRoutes?(): void;
    PATCHRoutes?(): void;
    OPTIONSRoutes?(): void;
    HEADRoutes?(): void;
}