"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRouter = void 0;
const router_1 = require("../../shared/routers/router");
const users_controller_1 = require("../controller/users.controller");
class UsersRouter extends router_1.BaseRouter {
    constructor() {
        super(users_controller_1.UsersController);
    }
    routes() {
        this.router.get("/users", this.controller.getUsers);
    }
}
exports.UsersRouter = UsersRouter;
//# sourceMappingURL=users.router.js.map