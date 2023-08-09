"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.corsConfig = void 0;
const whitelist = [
    'http://localhost:8000',
    'https://api-basic.vercel.app',
    'https://api-basic.vercel.app/docs/swagger-ui.css',
    'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css'
];
const contentTypes = [
    'Accept-Version',
    'Accept',
    'Access-Control-Allow-Origin',
    'application/atom+xml',
    'application/graphql',
    'application/json; charset=utf-8',
    'application/json;',
    'Application/JSON',
    'application/ld+json',
    'application/msword',
    'application/octet-stream',
    'application/pdf;',
    'application/pdf',
    'application/rss+xml',
    'application/vnd.github - issue.text  + json;',
    'application/vnd.github.v3.diff;',
    'application/vnd.google-earth.kml+xml',
    'application/vnd.google-earth.kmz',
    'application/vnd.ms-excel; ',
    'application/vnd.ms-excel',
    'application/vnd.mycompany.myapp.v2+json; ',
    'application/vnd.openstreetmap.data+xml; ',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/x-msdownload',
    'application/x-shockwave-flash',
    'application/x-www-form-urlencoded;',
    'application/x-www-form-urlencoded',
    'application/xhtml+xml',
    'application/xml',
    'application/zip',
    'audio/mpeg',
    'audio/x-m4a',
    'audio/x-wav',
    'Authorization',
    'charset=utf-8;',
    'Content-Length',
    'Content-MD5',
    'Content-Type',
    'Data',
    'Date',
    'device-remember-token',
    'image/gif',
    'image/jpeg',
    'image/png;',
    'image/png',
    'image/svg+xml; charset=utf-8',
    'image/svg+xml',
    'image/tiff',
    'image/vnd.djvu;',
    'image/x-icon',
    'multipart/form-data;',
    'multipart/form-data',
    'Origin',
    'text/css; charset=utf-8',
    'text/css',
    'text/html; charset=utf-8',
    'text/html;',
    'text/html',
    'Text/HTML',
    'text/javascript; charset=utf-8',
    'text/javascript',
    'text/plain; charset=utf-8',
    'text/plain;',
    'Text/Plain',
    'text/xml; charset=utf-8',
    'video/mp4',
    'video/mpeg',
    'video/quicktime',
    'video/x-flv',
    'video/x-ms-wmv',
    'video/x-msvideo',
    'X-Api-Version',
    'X-CSRF-Token',
    'X-File-Name', 'charset=utf-8',
    'X-Requested-With',
];
exports.corsConfig = {
    origin: (origin, callback) => {
        if (!origin || whitelist.indexOf(origin) !== -1 || whitelist.some((item) => origin === null || origin === void 0 ? void 0 : origin.includes(item))) {
            callback(null, true);
        }
        else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ['GET', 'PUT', 'POST', 'DELETE', 'HEAD', 'OPTIONS'],
    optionsSuccessStatus: 200,
    allowedHeaders: contentTypes,
    exposedHeaders: contentTypes,
    maxAge: 63072000,
    preflightContinue: false,
};
//# sourceMappingURL=cors.config.js.map