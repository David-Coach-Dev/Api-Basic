"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StartRouter = void 0;
const router_1 = require("../../shared/routers/router");
const start_controller_1 = require("../controller/start.controller");
class StartRouter extends router_1.BaseRouter {
    constructor() {
        super(start_controller_1.StartController);
    }
    routes() {
        this.router.get("/", this.controller.getStart);
    }
}
exports.StartRouter = StartRouter;
