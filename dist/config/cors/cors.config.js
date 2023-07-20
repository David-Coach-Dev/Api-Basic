"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.corsConfig = void 0;
const whitelist = ['https://api-basic.vercel.app/', 'http://localhost:8000'];
console.log('whitelist', whitelist);
exports.corsConfig = {
    origin: function (origin, callback) {
        const isWhitelisted = whitelist.indexOf(origin) !== -1;
        console.log('origin', origin);
        console.log('isWhitelisted', isWhitelisted);
        if (!isWhitelisted) {
            callback(null, true);
        }
        else {
            callback(new Error('Not allowed by CORS'));
        }
    }
};
