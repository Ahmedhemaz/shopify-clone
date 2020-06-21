import dotenv from "dotenv";
import * as nodepath from "path";

let basedir = nodepath.dirname(require.main.filename || process.mainModule.filename);
let path;
switch (process.env.NODE_ENV) {
    case "test":
        path = `${basedir}/../src/.env.test`;
        break;
    case "production":
        path = `${basedir}/../src/.env.production`;
        break;
    case "development":
        path = `${basedir}/../src/.env.development`;
}
dotenv.config({ path: path });