"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocsController = void 0;
class DocsController {
    getDocs(req, res) {
        res.status(200).json({
            Msn: "Dc Dev"
        });
    }
}
exports.DocsController = DocsController;
