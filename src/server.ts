import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import "reflect-metadata";
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';
import { DataSource } from 'typeorm';
import { ConfigServer } from './config/config';
import { swaggerOptions } from './config/swaggerOptions';
import { UserRouter } from './user/router/user.router';

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
    this.app.use('/api', this.routers());
    this.app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(this.swaggerSpec));
    this.listen();
  }

  routers(): Array<express.Router> {
    return [
      new UserRouter().router,
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
