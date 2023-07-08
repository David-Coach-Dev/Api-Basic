export const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Node Openai ChatGPT',
      version: '1.0.0',
      description: 'Node Openai ChatGPT',
    },
    servers: [
      {
        url: 'http://localhost:8000/api',
        description: 'The server api environment development',
      }
    ],
  },
  apis: ["./src/user/controller/user.controller.ts"],
};
