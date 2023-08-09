import { HelmetOptions } from 'helmet';

export const helmetConfig: HelmetOptions = {
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'", "'unsafe-inline'"],
      baseUri: ["'self'"],
      fontSrc: ["'self'", 'https:', 'data:'],
      formAction: ["'self'", 'https:', 'data:'],
      frameAncestors: ["'self'"],
      imgSrc: ["'self'","'unsafe-inline'", 'https:', 'data:'],
      objectSrc: ["'none'"],
      scriptSrc: ["'self'","'unsafe-inline'", 'https:', 'data:'],
      scriptSrcAttr: ["'none'"],
      styleSrc: ["'self'", 'https:', 'data:', "'unsafe-inline'"],
      styleSrcExt: ["'self'", "'unsafe-inline'", 'https:', 'data:'],
      upgradeInsecureRequests: [],
    },
    reportOnly: true,
  },
  crossOriginEmbedderPolicy: {
    policy: "credentialless",
  },
  crossOriginOpenerPolicy: {
    policy: "same-origin-allow-popups"
  },
  crossOriginResourcePolicy: {
    policy: "same-origin",
  },
  referrerPolicy: {
    policy: ["origin", "unsafe-url"],
  },
  strictTransportSecurity: {
    maxAge: 63072000,
    includeSubDomains: true,
    preload: true,
  },
  xContentTypeOptions: false,
  xDnsPrefetchControl: { allow: false },
  xDownloadOptions: false,
  xFrameOptions: { action: "sameorigin" },
  xPermittedCrossDomainPolicies: {
    permittedPolicies: "by-content-type",
  },
  xPoweredBy: false,
  xXssProtection: false,
};
