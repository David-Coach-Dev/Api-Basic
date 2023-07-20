import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import "reflect-metadata";
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';
import { DataSource } from 'typeorm';
import { ConfigServer } from './config/server/server.config';
import { swaggerOptions } from './config/swagger/swaggerOptions';
import { RaizRouter } from './raiz/router/raiz.router';
import { StartRouter } from './start/router/start.router';
import { UserRouter } from './user/router/user.router';

class ServerDc extends ConfigServer{
  public app: express.Application = express();
  private port: number = this.getNumberEnv('PORT');
  //private CSS_URL = "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css";
  private swaggerSpec = swaggerJSDoc(swaggerOptions);
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
    this.app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(this.swaggerSpec/*, { customCssUrl: this.CSS_URL }*/));
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
