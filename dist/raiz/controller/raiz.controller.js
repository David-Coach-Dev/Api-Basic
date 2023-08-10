"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RaizController = void 0;
const os_1 = __importDefault(require("os"));
class RaizController {
    getRaiz(req, res) {
        var _a;
        const user = os_1.default.userInfo();
        res.status(200).json({
            uptime: `${process.uptime()}`,
            data: { msn: `Bienvenido ${(_a = user === null || user === void 0 ? void 0 : user.username) !== null && _a !== void 0 ? _a : 'Dev'} a la Api Rest Full Dynamic.` },
            timestamp: `${Date.now()}`,
        });
    }
}
exports.RaizController = RaizController;
//# sourceMappingURL=raiz.controller.js.map