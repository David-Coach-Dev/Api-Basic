"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.helmetConfig = void 0;
exports.helmetConfig = {
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'", "'unsafe-inline'"],
            scriptSrc: ["'self'"],
            styleSrc: ["'self'", "'unsafe-inline'"],
            imgSrc: ["'self'"],
            fontSrc: ["'self'"],
            objectSrc: ["'none'"],
            mediaSrc: ["'none'"],
            frameSrc: ["'none'"],
            childSrc: ["'none'"],
            connectSrc: ["'self'"],
        },
    },
    frameguard: {
        action: 'deny',
    },
    hsts: {
        maxAge: 31536000,
        includeSubDomains: true,
        preload: true,
    },
    noSniff: true,
    xssFilter: true,
    referrerPolicy: {
        policy: 'same-origin',
    },
    dnsPrefetchControl: {
        allow: false,
    },
    hidePoweredBy: true,
    permittedCrossDomainPolicies: {
        permittedPolicies: 'none',
    },
};
//# sourceMappingURL=helmet.config.js.map