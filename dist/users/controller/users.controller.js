"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
class UsersController {
    getUsers(req, res) {
        res.status(200).json({
            uptime: `${process.uptime()}`,
            data: { user: '👨‍💻 Dc Dev -> David Caoch Dev.' },
            timestamp: `${Date.now()}`
        });
    }
}
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map