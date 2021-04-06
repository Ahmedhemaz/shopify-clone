export interface IConnectionHandler<ConnectionType> {
    readonly connectionOptions: any;
    connect(): void;
    disconnect(): void;
    getConnectionObject(): Readonly<ConnectionType>;
    isConnected(): boolean;
}