import { CorsOptions } from 'cors';

const whitelist = ['http://localhost:8000', 'https://api-basic.vercel.app','https://cdnjs.cloudflare.com'];

export const corsConfig: CorsOptions = {
  origin: (origin: string | undefined, callback) => {
    if (!origin || whitelist.some((allowedOrigin) => origin.startsWith(allowedOrigin))) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Application/JSON'],
};
