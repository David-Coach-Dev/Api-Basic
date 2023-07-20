export const swaggerOptions = {
  definition: {
    openapi: '3.1.0',
      info: {
      title: 'Sismadeq - Api Rest Full Dynamic.',
      description: 'Sistema De Manejo de Equipos - Sismadeq - Api Rest Full Dynamic.',
      version: '1.0.0',
      xLogo: {
        url: './src/asset/img/logo.png',
        href: 'https://guerrerosback.netlify.app/api',
        altText: 'Guerreros Backend Api'
      },
      contact: {
        name: 'API Support',
        url: 'https://www.example.com/support',
        email: 'support@example.com'
      },
      license: {
        name: 'Mit',
        identifier: 'MIT',
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
            enum: ['api', 'docs'],
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
  },
  apis: ["./dist/**/doc/*.doc.js"],
  xTagGroups: [
    {
      name: 'Guerreros',
      tags: ['Users', 'Posts', 'Categories']
    },
    {
      name: 'Schemes',
      tags: ['Users', 'Posts', 'Categories']
    }
  ]
};