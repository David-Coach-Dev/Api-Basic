"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleCors = void 0;
const whitelist = [
    'http://localhost:1111',
    'http://localhost:2222',
    'http://localhost:3333',
    'http://localhost:4444'
];
const corsOptions = {
    allowOrigin: createWhitelist(whitelist),
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowHeaders: ['Content-Type', 'Authorization'],
    allowCredentials: true
};
function createWhitelist(whitelist) {
    const matches = whitelist.map(item => (url) => url === item);
    return (url) => matches.some(match => match(url));
}
const handleCors = (req, res, next) => {
    setAllowOrigin(req, res);
    setAllowMethods(res);
    setAllowHeaders(res);
    setAllowCredentials(res);
    next();
};
exports.handleCors = handleCors;
function setAllowOrigin(req, res) {
    const origin = req.headers['origin'];
    if (corsOptions.allowOrigin && corsOptions.allowOrigin(origin)) {
        res.set('Access-Control-Allow-Origin', origin);
        res.set('Vary', 'Origin');
    }
    else {
        res.set('Access-Control-Allow-Origin', '');
    }
}
function setAllowMethods(res) {
    if (corsOptions.allowMethods) {
        res.set('Access-Control-Allow-Methods', corsOptions.allowMethods.join(', '));
    }
}
function setAllowHeaders(res) {
    if (corsOptions.allowHeaders) {
        res.set('Access-Control-Allow-Headers', corsOptions.allowHeaders.join(', '));
    }
}
function setAllowCredentials(res) {
    if (corsOptions.allowCredentials) {
        res.set('Access-Control-Allow-Credentials', 'true');
    }
}
