"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function handler(request, response) {
    if (request.query.key !== "sharedKey") {
        response.status(404).end();
        return;
    }
    response.status(200).json({ success: true });
}
exports.default = handler;
//# sourceMappingURL=resetNumOfReq%20copy.js.map