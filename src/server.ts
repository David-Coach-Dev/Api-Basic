import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import "reflect-metadata";
import { UserRouter } from './user/router/user.router';
import { ConfigServer } from './config/config';
import { DataSource } from 'typeorm';
import swaggerUI from 'swagger-ui-express';
import { swaggerSpec } from './doc/server/docSawggerServer';
import { DocsRouter } from './doc/router/DocsRouter';

class ServerDc extends ConfigServer{
  public app: express.Application = express();
  private port: number = this.getNumberEnv('PORT');

  constructor() {
    super();
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.dbConnection();
    this.app.use(morgan('dev'));
    this.app.use(cors());
    this.app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));
    this.app.use('/api', this.routers());
    this.listen();
  }

  routers(): Array<express.Router> {
    return [
      new UserRouter().router,
      new DocsRouter().router,
    ];
  };

  async dbConnection(): Promise<void> {
    try {
        await new DataSource(this.typeORMConfig).initialize();
        console.log(`🚀  Database Connected with dc_back_db -> 😁👍`);
    } catch (error) {
        console.log(`☠️ Database Connection Error: ${error}` );
    }
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`Server is running on https://localhost:${this.port}`);
    })
  }

}

const server = new ServerDc();
