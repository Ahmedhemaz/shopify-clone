import { ConnectionOptionsMock } from "./connectionOptionsMock";
import { ConnectionObjectMock } from "./connectionObjectMock";

const typeorm = jest.genMockFromModule('typeorm');

function  createConnection(options:ConnectionOptionsMock): ConnectionObjectMock{
    const connection = new ConnectionObjectMock(options);
    connection.isConnected = true;  
    return connection
}

(typeorm as any).createConnection = createConnection;
module.exports = typeorm;
