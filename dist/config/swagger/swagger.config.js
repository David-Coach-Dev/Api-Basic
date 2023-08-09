"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.controller = exports.middleware = void 0;
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_themes_1 = require("swagger-themes");
const env = process.env.NODE_ENV;
const theme = new swagger_themes_1.SwaggerTheme("v3");
const serverUrl = (env === null || env === void 0 ? void 0 : env.trim()) === "production" ? 'https://api-basic.vercel.app/{basePath}' : 'http://localhost:8000/{basePath}';
const swaggerConfig = {
    failOnErrors: true,
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Sismadeq - Api Rest Full Dynamic.',
            summary: "Un Sistema De Manejo de Equipos.",
            description: 'Sistema De Manejo de Equipos - Sismadeq - Api Rest Full Dynamic based on the OpenAPI 3.0 Specification (OAS3). <br /><br />By',
            termsOfService: 'http://swagger.io/terms/',
            contact: {
                name: 'Dc Dev -> David Coach Dev',
                url: 'https://www.linkedin.com/in/dcdevtk/',
                email: 'dcdevtk@gmail.com'
            },
            license: {
                name: 'MIT',
                url: 'https://opensource.org/license/mit/'
            },
            version: '1.0.0',
        },
        servers: [
            {
                url: serverUrl,
                description: 'The server api environment ' + ((env === null || env === void 0 ? void 0 : env.trim()) === "production" ? 'production' : 'development'),
                variables: {
                    basePath: {
                        enum: ['api'],
                        default: 'api',
                        description: 'this value is assigned by the service provider'
                    },
                }
            }
        ],
        consumes: ['application/json'],
        produces: ['application/json'],
    },
    apis: [
        "dist/**/doc/*.doc.js",
    ],
};
const swaggerOptions = {
    explorer: true,
    swaggerUi: true,
    docExpansion: 'list',
    filter: true,
    customfavIcon: "dist/assets/ico/favicon.ico",
    customSiteTitle: 'Api Rest Full Dynamic',
    customCss: theme.getBuffer("dark") + '.swagger-ui .topbar {display: none;}',
    customCssUrl: "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css",
};
const config = (0, swagger_jsdoc_1.default)(swaggerConfig);
exports.middleware = swagger_ui_express_1.default.serve;
exports.controller = swagger_ui_express_1.default.setup(config, swaggerOptions);
//# sourceMappingURL=swagger.config.js.map