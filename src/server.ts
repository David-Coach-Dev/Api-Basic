import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

class ServerDc {
  public app: express.Application = express();
  private port: number = 8000;

  constructor() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(morgan('dev'));
    this.app.use(cors());

    this.app.get('/api/hola', (req, res) => {
      res.status(200).json({
        msn: "Hello Dev se me cuidan pilas!"
      })
    })

    this.listen();
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`Server is running on https://localhost:${this.port}`);
    })
  }

}

new ServerDc();