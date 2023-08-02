"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RaizController = void 0;
const os_1 = __importDefault(require("os"));
class RaizController {
    getRaiz(req, res) {
        const user = os_1.default.userInfo();
        console.log(user);
        res.status(200).json({
            user: `Bienvenido ${user.username} a la Api Rest Full Dynamic.`
        });
    }
}
exports.RaizController = RaizController;
//# sourceMappingURL=raiz.controller.js.map