"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const server_config_1 = require("./config/server/server.config");
const raiz_router_1 = require("./raiz/router/raiz.router");
const start_router_1 = require("./start/router/start.router");
const users_router_1 = require("./users/router/users.router");
const cors_config_1 = require("./config/cors/cors.config");
const swagger = require('./config/swagger/swagger.config');
class ServerDc extends server_config_1.ConfigServer {
    constructor() {
        super();
        this.app = (0, express_1.default)();
        this.port = this.getNumberEnv('PORT');
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.dbConnection();
        this.app.use((0, helmet_1.default)());
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)(cors_config_1.corsConfig));
        this.app.use('/', this.start());
        this.app.use('/api', this.api());
        this.app.use('/docs', swagger.middleware, swagger.controller);
        this.app.use('*', this.start());
        this.listen();
    }
    api() {
        return [
            new users_router_1.UsersRouter().router,
            new raiz_router_1.RaizRouter().router,
        ];
    }
    ;
    start() {
        return [
            new start_router_1.StartRouter().router,
        ];
    }
    ;
    dbConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield new typeorm_1.DataSource(this.typeORMConfig).initialize();
                console.log(`✅ Database Connected with 🚀 dc_back_db.`);
            }
            catch (error) {
                console.log(`☠️  Database Connection Error: ${error}.`);
            }
        });
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`✅ Server 🆗 is running 💯 on http://localhost:${this.port}`);
        });
    }
}
const server = new ServerDc();
//# sourceMappingURL=server.js.map