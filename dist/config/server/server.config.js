"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigServer = void 0;
const dotenv = __importStar(require("dotenv"));
const typeorm_naming_strategies_1 = require("typeorm-naming-strategies");
class ConfigServer {
    constructor() {
        const nodeNameEnv = this.createPathEnv(this.nodeEnv);
        dotenv.config({
            path: nodeNameEnv,
        });
    }
    getEnvironment(x) {
        return process.env[x];
    }
    getNumberEnv(x) {
        return Number(this.getEnvironment(x));
    }
    get nodeEnv() {
        var _a, _b;
        return (_b = (_a = this.getEnvironment("NODE_ENV")) === null || _a === void 0 ? void 0 : _a.trim()) !== null && _b !== void 0 ? _b : "";
    }
    createPathEnv(path) {
        const arrEnv = ['env'];
        if (path.length > 0) {
            const stringToArray = path.split('.');
            arrEnv.unshift(...stringToArray);
        }
        return '.' + arrEnv.join('.');
    }
    get typeORMConfig() {
        return {
            type: "mysql",
            host: this.getEnvironment("DB_HOST"),
            port: this.getNumberEnv("DB_PORT"),
            username: this.getEnvironment("DB_USER"),
            password: this.getEnvironment("DB_PASSWORD"),
            database: this.getEnvironment("DB_DATABASE"),
            //entities: [__dirname + "/../**/*.entity{.ts,.js}"], // Si queremos que busque fuera de un directorio y por nombre de archivo y extensión
            entities: [__dirname + "/../**/*.entity{.ts,.js}"],
            migrations: [__dirname + "../../migrations/*{.ts, .js}"],
            synchronize: true,
            logging: false,
            namingStrategy: new typeorm_naming_strategies_1.SnakeNamingStrategy()
        };
    }
}
exports.ConfigServer = ConfigServer;
//# sourceMappingURL=server.config.js.map