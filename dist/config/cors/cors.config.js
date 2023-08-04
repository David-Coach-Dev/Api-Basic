"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.corsConfig = void 0;
const whitelist = ['http://localhost:8000', 'https://api-basic.vercel.app', 'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css'];
exports.corsConfig = {
    origin: (origin, callback) => {
        if (!origin || whitelist.indexOf(origin) !== -1 || whitelist.some((allowedOrigin) => origin.startsWith(allowedOrigin))) {
            callback(null, true);
        }
        else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
    optionsSuccessStatus: 200,
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'device-remember-token', 'Access-Control-Allow-Origin', 'Origin', 'Accept', 'Application/JSON', 'Text/Plain', 'Text/HTML', 'application/x-www-form-urlencoded', 'X-CSRF-Token', 'Accept-Version', 'Content-Length', 'Content-MD5', 'Date', 'Data', 'X-Api-Version', 'X-File-Name', 'charset=utf-8'],
};
//# sourceMappingURL=cors.config.js.map