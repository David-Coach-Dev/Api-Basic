"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RaizRouter = void 0;
const router_1 = require("../../shared/routers/router");
const raiz_controller_1 = require("../controller/raiz.controller");
class RaizRouter extends router_1.BaseRouter {
    constructor() {
        super(raiz_controller_1.RaizController);
    }
    routes() {
        this.router.get("/", this.controller.getRaiz);
    }
}
exports.RaizRouter = RaizRouter;
