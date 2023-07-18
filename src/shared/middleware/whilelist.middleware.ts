import { Handler } from 'express';

const whitelist = [
  'http://localhost:8000',
  'https://api-basic.vercel.app',
  'https://api-basic.vercel.app/api/user',
];

const corsOptions = {
  allowOrigin: createWhitelist(whitelist),
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowHeaders: ['Content-Type', 'Authorization'],
  allowCredentials: true
};

function createWhitelist(whitelist: string[]): (url: string) => boolean {
  const matches = whitelist.map(item => (url: string) => url === item);
  return (url: string) => matches.some(match => match(url));
}

export const handleCors: Handler = (req, res, next) => {
  if (isValidScheme(req)) {
    setAllowOrigin(req, res);
    setAllowMethods(res);
    setAllowHeaders(res);
    setAllowCredentials(res);
    setResponseContentType(res);
  }
  next();
};

function isValidScheme(req: any): boolean {
  const scheme = req.protocol;
  return scheme === 'http' || scheme === 'https';
}

function setAllowOrigin(req: any, res: any) {
  const origin = req.headers['origin'];
  if (corsOptions.allowOrigin && corsOptions.allowOrigin(origin)) {
    res.set('Access-Control-Allow-Origin', origin);
    res.set('Vary', 'Origin');
  } else {
    res.set('Access-Control-Allow-Origin', '');
  }
}

function setAllowMethods(res: any) {
  if (corsOptions.allowMethods) {
    res.set('Access-Control-Allow-Methods', corsOptions.allowMethods.join(', '));
  }
}

function setAllowHeaders(res: any) {
  if (corsOptions.allowHeaders) {
    res.set('Access-Control-Allow-Headers', corsOptions.allowHeaders.join(', '));
  }
}

function setAllowCredentials(res: any) {
  if (corsOptions.allowCredentials) {
    res.set('Access-Control-Allow-Credentials', 'true');
  }
}
function setResponseContentType(res: any) {
  res.set('Content-Type', 'application/json; charset=utf-8, text/plain; charset=utf-8, text/html; charset=utf-8', 'text/xml; charset=utf-8', 'text/css; charset=utf-8', 'text/javascript; charset=utf-8', 'image/svg+xml; charset=utf-8');
function setResponseContentType(res: any) {
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