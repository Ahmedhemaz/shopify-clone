import { Connection } from "typeorm";

export  class ConnectionObjectMock extends Connection{
    public isConnected:boolean;
    constructor(options){
        super(options);
    }
}
