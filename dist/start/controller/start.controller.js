"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StartController = void 0;
class StartController {
    getStart(req, res) {
        res.status(200).json({
            uptime: `${process.uptime()}`,
            data: { error: '☠️ Ruta no validad...' },
            timestamp: `${Date.now()}`
        });
    }
}
exports.StartController = StartController;
//# sourceMappingURL=start.controller.js.map