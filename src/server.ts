import express from 'express';
import cors from 'cors';
import path from 'path';
import helmet from 'helmet';
import morgan from 'morgan';
import "reflect-metadata";
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';
import swaggerServer from 'express-swagger-ui-router';
import { DataSource } from 'typeorm';
import { ConfigServer } from './config/server/server.config';
import { RaizRouter } from './raiz/router/raiz.router';
import { StartRouter } from './start/router/start.router';
import { UserRouter } from './user/router/user.router';
import { corsConfig } from './config/cors/cors.config';
import { swaggerConfig } from './config/swagger/swagger.config';


class ServerDc extends ConfigServer{
  public app: express.Application = express();
  private port: number = this.getNumberEnv('PORT');
  private swaggerSpec = swaggerJSDoc(swaggerConfig);

  constructor() {
    super();
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.dbConnection();
    this.app.use(helmet());
    this.app.use(morgan('dev'));
    this.app.use(cors(corsConfig));
    this.app.use('/', this.start());
    this.app.use('/api', this.api());
    this.app.use('/docs', swaggerUI.serve)
    this.app.use('/docs', swaggerUI.setup(this.swaggerSpec, this.options));
    this.listen();
  }

  api(): Array<express.Router> {
    return [
      new UserRouter().router,
      new RaizRouter().router,
    ];
  };
  start(): Array<express.Router> {
    return [
      new StartRouter().router,
    ];
  };
  options = {
    explorer: false,
    swaggerUi: false,
    docExpansion: 'list',
    validatorUrl: null,
    filter: false,
    apisSorter: 'alpha',
    deepLinking: true,
    customSiteTitle: 'Api Rest Full Dynamic',
    customfavIcon: './asset/ico/favicon.ico',
    customSiteUrl: 'http://localhost.8000',
    customCss: '.topbar { display: none }',
    customCssUrl: 'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css',
    customJsUrl: [
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui-bundle.js',
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui-standalone-preset.js',
    ],
  };

  async dbConnection(): Promise<void> {
    try {
        await new DataSource(this.typeORMConfig).initialize();
        console.log(`✅ Database Connected with 🚀 dc_back_db.`);
    } catch (error) {
        console.log(`☠️  Database Connection Error: ${error}.` );
    }
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`✅ Server 🆗 is running 💯 on http://localhost:${this.port}`);
    })
  }

}

const server = new ServerDc();
