import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';
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
    this.app.use('/api-docs', this.swagger());
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

  swagger():Array<express.Router>{
    const routes = express.Router();
    const options = {
      customCssUrl:'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css',
      customJsUrl: [
        'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui-bundle.js',
        'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui-standalone-preset.js'
      ],
      customCss: '.topbar { display: none }',
    }
    routes.use('/', swaggerUI.serve);
    routes.get('/', swaggerUI.setup(this.swaggerSpec, options));
    return [routes];
  }
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
      console.log(`✅ Server 🆗 is running 💯 on http://localhost:${this.port}.`);
    })
  }

}

const server = new ServerDc();
