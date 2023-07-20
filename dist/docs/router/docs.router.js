"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocsRouter = void 0;
const router_1 = require("../../shared/routers/router");
const doc_controller_1 = require("../controller/doc.controller");
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
class DocsRouter extends router_1.BaseRouter {
    constructor() {
        super(doc_controller_1.DocsController);
    }
    routes() {
        this.router.get("/info", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(this.controller.getDocs));
    }
}
exports.DocsRouter = DocsRouter;
