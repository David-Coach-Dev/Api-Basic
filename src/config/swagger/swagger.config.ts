const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const projectInfo = require('../../../package.json');
const env = process.env.NODE_ENV;

const serverUrl = env?.trim() === "production" ? 'https://api-basic.vercel.app/{basePath}' : 'http://localhost:8000/{basePath}';

const swaggerConfig = {
  failOnErrors: true,
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Sismadeq - Api Rest Full Dynamic.',
      summary: "Un Sistema De Manejo de Equipos.",
      description: 'Sistema De Manejo de Equipos - Sismadeq - Api Rest Full Dynamic based on the OpenAPI 3.0 Specification (OAS3). <br /><br />By',
      termsOfService: 'http://swagger.io/terms/',
      contact: {
        name: projectInfo.author.name,
        url: projectInfo.author.url,
        email: projectInfo.author.email
      },
      license: {
        name: projectInfo.license,
        url: 'https://opensource.org/license/mit/'
      },
      version: projectInfo.version,
    },
    servers: [
      {
        url: serverUrl,
        description: 'The server api environment ' + (env?.trim()==="production" ? 'production' : 'development'),
        variables: {
          basePath: {
            enum: ['api'],
            default: 'api',
            description: 'this value is assigned by the service provider'
          },
        }
      }
    ],
    consumes: ['application/json'],
    produces: ['application/json'],
  },
  apis: [
    "dist/**/doc/*.doc.js",
  ],
}

const swaggerOptions = {
  explorer: true,
  swaggerUi: true,
  docExpansion: 'list',
  validatorUrl: null,
  filter: true,
  deepLinking: true,
  customSiteTitle: 'Api Rest Full Dynamic',
  customFavIcon: 'dist/asset/img/logo.png',
  customCss: '.swagger-ui .topbar {display: none;}',
  customCssUrl: 'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css'
};

const config = swaggerJsDoc(swaggerConfig);
const middleware = swaggerUI.serve;
const controller = swaggerUI.setup(config, swaggerOptions);

module.exports = { middleware, controller };