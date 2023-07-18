import { Handler } from 'express';

const whitelist = [
  'https://localhost:8000',
  'https://api-basic.vercel.app'
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
  setAllowOrigin(req, res);
  setAllowMethods(res);
  setAllowHeaders(res);
  setAllowCredentials(res);
  setResponseContentType(res);
  next();
};

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
  res.set('Content-Type', 'application/json; charset=utf-8');
}
