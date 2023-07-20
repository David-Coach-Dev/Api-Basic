const whitelist = ['https://api-basic.vercel.app/', 'http://localhost:8000'];

console.log('whitelist',whitelist)
export const corsConfig = {
  origin: function (origin: any, callback: any) {
    const isWhitelisted = whitelist.indexOf(origin) !== -1;
    console.log('origin',origin);
    console.log('isWhitelisted',isWhitelisted);
    if (!isWhitelisted) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}