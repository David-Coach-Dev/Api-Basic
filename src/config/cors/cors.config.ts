const whitelist = ['https://api-basic.vercel.app/', 'http://localhost:8000'];
console.log('whitelist',whitelist)
export const corsConfig = {
  origin: function (origin: any, callback: any) {
    console.log('origin',origin);
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}