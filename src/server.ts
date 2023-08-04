import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import "reflect-metadata";
import { DataSource } from 'typeorm';
import { ConfigServer } from './config/server/server.config';
import { RaizRouter } from './raiz/router/raiz.router';
import { StartRouter } from './start/router/start.router';
import { UsersRouter } from './users/router/users.router';
import { corsConfig } from './config/cors/cors.config';
const swagger = require('./config/swagger/swagger.config');

class ServerDc extends ConfigServer{
  public app: express.Application = express();
  private port: number = this.getNumberEnv('PORT');

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
    this.app.use('/docs', swagger.middleware, swagger.controller);
    this.app.use('*', this.start());
    this.listen();
  }

  api(): Array<express.Router> {
    return [
      new UsersRouter().router,
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
      console.log(`✅ Server 🆗 is running 💯 on http://localhost:${this.port}`);
    })
  }

}

const server = new ServerDc();
