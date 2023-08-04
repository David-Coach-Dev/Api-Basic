import { CorsOptions } from 'cors';
import { Column } from 'typeorm';

const whitelist = ['http://localhost:8000', 'https://api-basic.vercel.app'];

export const corsConfig: CorsOptions = {
  origin: (origin: string | undefined, callback) => {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'PUT', 'POST', 'DELETE','HEAD', 'OPTIONS'],
  optionsSuccessStatus: 204,
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'device-remember-token', 'Access-Control-Allow-Origin', 'Origin', 'Accept', 'Application/JSON', 'Text/Plain', 'text/html','Text/HTML', 'application/x-www-form-urlencoded', 'X-CSRF-Token', 'Accept-Version', 'Content-Length', 'Content-MD5', 'Date', 'Data', 'X-Api-Version', 'X-File-Name', 'charset=utf-8'],
  exposedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'device-remember-token', 'Access-Control-Allow-Origin', 'Origin', 'Accept', 'Application/JSON', 'Text/Plain','text/html', 'Text/HTML', 'application/x-www-form-urlencoded', 'X-CSRF-Token', 'Accept-Version', 'Content-Length', 'Content-MD5', 'Date', 'Data', 'X-Api-Version', 'X-File-Name', 'charset=utf-8'],
  maxAge: 63072000,
  preflightContinue: false,
};
