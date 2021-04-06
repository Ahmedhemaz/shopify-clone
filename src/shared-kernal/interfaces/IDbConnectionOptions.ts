export interface IDbConnectionOptions {
    readonly connectionOptions:any;
    getConnectionOptions(): Readonly<any>
}