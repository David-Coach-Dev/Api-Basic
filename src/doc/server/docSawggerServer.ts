const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Node Openai ChatGPT',
      version: '1.0.0',
    },
    servers: [
      {
        url: 'http://localhost:8000',
      }
    ]
  },
  apis: ['../../src/server.ts']
}

export const swaggerSpec = swaggerJSDoc(options);