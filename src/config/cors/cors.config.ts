import { CorsOptions } from 'cors';

const whitelist = ['http://localhost:8000', 'https://api-basic.vercel.app','https://cdnjs.cloudflare.com'];

export const corsConfig: CorsOptions = {
  origin: (origin: string | undefined, callback) => {
    if (!origin || whitelist.indexOf(origin) !== -1 || whitelist.some((allowedOrigin) => origin.startsWith(allowedOrigin))) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  credentials: true, //Credentials are cookies, authorization headers or TLS client certificates.
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'device-remember-token', 'Access-Control-Allow-Origin', 'Origin', 'Accept', 'Application/JSON', 'Text/Plain', 'Text/HTML','application/x-www-form-urlencoded','X-CSRF-Token','Accept-Version', 'Content-Length', 'Content-MD5',  'Date','Data', 'X-Api-Version', 'X-File-Name','charset=utf-8'],
};
