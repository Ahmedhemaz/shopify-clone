export  class ConnectionObjectMock{
    public isConnected: boolean;
    public  close() {
        this.isConnected = false
    }
    constructor() {
        this.isConnected = true;
    }
}
