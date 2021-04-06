import { ConnectionOptionsMock } from "./connectionOptionsMock";
import { ConnectionObjectMock } from "./connectionObjectMock";

const typeorm = jest.genMockFromModule('typeorm');

function  createConnection(options:ConnectionOptionsMock): any{
    const connection = connectionMock;
    connection.isConnected = true;  
    return connection;
}
const connectionMock = new ConnectionObjectMock();
(typeorm as any).createConnection = createConnection;
(typeorm as any).Connection = connectionMock;
module.exports = typeorm;
