"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.corsConfig = void 0;
const whitelist = ['localhost:8000', 'https://api-basic.vercel.app'];
exports.corsConfig = {
    origin: function (origin, callback) {
        // Verificar si el origen está en la lista blanca
        console.log('ori - >', origin);
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        }
        else {
            callback(new Error('Acceso no permitido por CORS'));
        }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS', 'HEAD', 'CONNECT'],
    allowedHeaders: ['Content-Type', 'Authorization', ''],
};
