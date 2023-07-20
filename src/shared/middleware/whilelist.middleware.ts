import { Request, Response, NextFunction } from 'express';

interface CorsOptions {
  allowOrigin: (origin: string) => boolean | string ;
  allowMethods: string[];
  allowHeaders: string[];
  allowCredentials: boolean;
}

const whitelist = [
  'http://localhost:8000/',
  'http://localhost:8000/api',
  'http://localhost:8000/api-docs',
  'https://api-basic.vercel.app',
  'https://api-basic.vercel.app/api',
  'https://api-basic.vercel.app/api-docs'
];

const corsOptions: CorsOptions = {
  allowOrigin: generateWhitelist(whitelist),
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowHeaders: ['Content-Type', 'Authorization'],
  allowCredentials: true
};
console.log('Cors Options', corsOptions);

function generateWhitelist(whitelist: string[]): (url: string) => boolean {
  return (url: string) =>{
    console.log('url',url);
    return whitelist.some(match => match.includes(url))
  };
}

export const handleCors = (req: Request, res: Response, next: NextFunction) => {
  isSameOrigin(req);
  if (isValidScheme(req)) {
    if (!isOriginAllowed(req)) {
      res.status(403).json({
      error: "Origin not allowed"
    });
      return;
    }
    setAllowOrigin(req, res);
    setAllowMethods(res);
    setAllowHeaders(res);
    setAllowCredentials(res);
    setResponseContentType(res);
  }
  next();
};


function isValidScheme(req: Request): boolean {
  const scheme = req.protocol;
  return scheme === 'http' || scheme === 'https';
}

const isSameOrigin = function(req: Request): boolean {
 const host = req.protocol + '://' + req.headers['host'];
 console.log('Host -> ',host)
 const origin = req.headers['origin'];
 console.log('Origen',origin)
 return host === origin || !origin;
};

function isOriginAllowed(req: Request): boolean {
  const origin = req.headers['origin'];
  if (typeof corsOptions.allowOrigin === 'function' && origin) {
    const result = corsOptions.allowOrigin(origin);
    if (result !== undefined) {
      if (typeof result === 'boolean') {
        return result;
      }
      if (typeof result === 'string') {
        return result.toLowerCase() === 'true';
      }
    }
  }
  return false;
}

function setAllowOrigin(req: Request, res: Response) {
  const origin = req.headers['origin'];
  if (origin && typeof corsOptions.allowOrigin === 'function' && corsOptions.allowOrigin(origin)) {
    res.set('Access-Control-Allow-Origin', origin);
    res.set('Vary', 'Origin');
  } else {
    res.set('Access-Control-Allow-Origin', '');
  }
}

function setAllowMethods(res: Response) {
  if (corsOptions.allowMethods) {
    res.set('Access-Control-Allow-Methods', corsOptions.allowMethods.join(', '));
  }
}

function setAllowHeaders(res: Response) {
  if (corsOptions.allowHeaders) {
    res.set('Access-Control-Allow-Headers', corsOptions.allowHeaders.join(', '));
  }
}

function setAllowCredentials(res: Response) {
  if (corsOptions.allowCredentials) {
    res.set('Access-Control-Allow-Credentials', 'true');
  }
}

function setResponseContentType(res: Response) {
  const contentTypes = [
    'application/json; charset=utf-8',
    'text/plain; charset=utf-8',
    'text/html; charset=utf-8',
    'text/xml; charset=utf-8',
    'text/css; charset=utf-8',
    'text/javascript; charset=utf-8',
    'image/svg+xml; charset=utf-8',
    'application/octet-stream',
    'application/pdf',
    'application/zip',
    'application/x-www-form-urlencoded',
    'multipart/form-data',
    'application/graphql',
    'application/ld+json',
    'application/rss+xml',
    'application/atom+xml',
    'application/xhtml+xml',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/msword',
    'application/vnd.google-earth.kml+xml',
    'application/vnd.google-earth.kmz',
    'application/x-msdownload',
    'application/x-shockwave-flash',
    'audio/mpeg',
    'audio/x-wav',
    'audio/x-m4a',
    'image/jpeg',
    'image/png',
    'image/gif',
    'image/tiff',
    'image/x-icon',
    'video/mpeg',
    'video/mp4',
    'video/quicktime',
    'video/x-flv',
    'video/x-msvideo',
    'video/x-ms-wmv'
  ];

  const contentTypeHeader = contentTypes.join(', ');

  res.set('Content-Type', contentTypeHeader);
}