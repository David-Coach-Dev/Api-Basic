"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocsController = void 0;
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_config_1 = require("../../config/swagger/swagger.config");
class DocsController {
    getDocs(req, res) {
        const swaggerSpec = (0, swagger_jsdoc_1.default)(swagger_config_1.swaggerConfig);
        const options = {
            documentation: swaggerSpec,
            /*customCssUrl:'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css',
            customJsUrl: [
              'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui-bundle.js',
              'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui-standalone-preset.js'
            ],*/
            customCss: '.topbar { display: none }',
        };
        res.send.arguments(Object.assign(Object.assign({}, swaggerSpec), options));
    }
}
exports.DocsController = DocsController;
