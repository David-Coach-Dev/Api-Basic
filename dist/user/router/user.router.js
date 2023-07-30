"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRouter = void 0;
const router_1 = require("../../shared/routers/router");
const user_controller_1 = require("../controller/user.controller");
class UserRouter extends router_1.BaseRouter {
    constructor() {
        super(user_controller_1.UserController);
    }
    routes() {
        this.router.get("/user", this.controller.getUsers);
    }
}
exports.UserRouter = UserRouter;
//# sourceMappingURL=user.router.js.map