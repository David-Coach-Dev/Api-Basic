"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.helmetConfig = void 0;
exports.helmetConfig = {
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
            scriptSrc: ["'self'"],
            styleSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'", "'strict-dynamic'", "cdnjs.cloudflare.com"],
            imgSrc: ["'self'"],
            fontSrc: ["'self'"],
            objectSrc: ["'none'"],
            mediaSrc: ["'none'"],
            frameSrc: ["'none'"],
            childSrc: ["'none'"],
            connectSrc: ["'self'"],
        },
    },
    hidePoweredBy: true,
    hsts: {
        maxAge: 31536000,
        includeSubDomains: true,
        preload: true,
    },
    noSniff: true,
    xssFilter: true,
    frameguard: {
        action: 'deny',
    },
    permittedCrossDomainPolicies: {
        permittedPolicies: 'none',
    },
    referrerPolicy: {
        policy: 'no-referrer',
    },
};
//# sourceMappingURL=helmet.config.js.map