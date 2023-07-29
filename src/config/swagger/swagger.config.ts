const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const projectInfo = require('../../../package.json');

const swaggerConfig = {
  failOnErrors: true,
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Sismadeq - Api Rest Full Dynamic.',
      version: projectInfo.version,
      description: 'Sistema De Manejo de Equipos - Sismadeq - Api Rest Full Dynamic based on the OpenAPI 3.0 Specification (OAS3). <br /><br />By',
      contact: {
        name: projectInfo.author.name,
        url: projectInfo.author.url,
        email: projectInfo.author.email
      },
      license: {
        name: projectInfo.license,
        identifier: projectInfo.license,
        url: 'https://opensource.org/license/mit/'
      }
    },
    servers: [
      {
        url: 'http://localhost:{port}/{basePath}',
        description: 'The server api environment development',
        variables: {
          port: {
            enum: ['8000', '7000'],
            default: '8000'
          },
          basePath: {
            enum: ['api', 'api-docs'],
            default: 'api',
            description:
              'this value is assigned by the service provider'
          },
          versionApi: {
            enum: ['v1', 'v2'],
            default: 'v1',
            description:
              'this value is assigned by the version api provider'
          }
        }
      },
      {
        url: 'https://api-basic.vercel.app/api',
        description: 'The server api environment production',
      }
    ],
    consumes: ['application/json'],
    produces: ['application/json'],
  },
  apis: [
    "{src,dist}/**/**/*.doc.{ts,js}",
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
    customfavIcon: './src/asset/ico/favicon.ico',
    customCss: ' .swagger-ui .topbar {display: none;}',
    /*customCssUrl: 'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css',
    customJsUrl: [
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui-bundle.js',
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui-standalone-preset.js',
    ],*/
};

const config = swaggerJsDoc(swaggerConfig);
const middleware = swaggerUI.serve;
const controller = swaggerUI.setup(config, swaggerOptions);

module.exports = { middleware, controller };