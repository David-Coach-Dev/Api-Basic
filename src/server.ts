import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import "reflect-metadata";
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';
import { DataSource } from 'typeorm';
import { UserRouter } from './user/router/user.router';
import { ConfigServer } from './config/config/config';
import { StartRouter } from './start/router/start.router';
import { swaggerOptions } from './config/swagger/swaggerOptions';
import { RaizRouter } from './raiz/router/raiz.router';

class ServerDc extends ConfigServer{
  public app: express.Application = express();
  private port: number = this.getNumberEnv('PORT');
  public swaggerSpec = swaggerJSDoc(swaggerOptions);
  constructor() {
    super();
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.dbConnection();
    this.app.use(helmet());
    this.app.use(morgan('dev'));
    this.app.use(cors());
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

  swagger(): Array<express.Router> {
    const router = express.Router();
    return [
      router.use('/', swaggerUI.serve),
      router.get('/', swaggerUI.setup(this.swaggerSpec))
    ];
  }

  async dbConnection(): Promise<void> {
    try {
        await new DataSource(this.typeORMConfig).initialize();
        console.log(`✅ Database Connected with 🚀 dc_back_db .`);
    } catch (error) {
        console.log(`☠️  Database Connection Error: ${error}.` );
    }
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`✅ Server 🆗 is running 💯 on https://localhost:${this.port}.`);
    })
  }

}

const server = new ServerDc();
