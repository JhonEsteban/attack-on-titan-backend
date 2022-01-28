import cors from 'cors';
import express, { Application } from 'express';

import { Paths } from '../models';
import { characterRoutes, wallRoutes, armyRoutes } from '../routes';

class Server {
  private app: Application;
  private port: string;

  private paths: Paths = {
    api: '/api/v1',
    characters: '/characters',
    walls: '/walls',
    armys: '/armys',
  };

  constructor() {
    this.app = express();
    this.port = process.env.PORT || '3000';
    this.setMiddlewares();
    this.setRoutes();
  }

  private setMiddlewares(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(cors());
  }

  private setRoutes(): void {
    const { api, characters, walls, armys } = this.paths;

    this.app.use(`${api}${characters}`, characterRoutes);
    this.app.use(`${api}${walls}`, wallRoutes);
    this.app.use(`${api}${armys}`, armyRoutes);
  }

  public run(): void {
    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    });
  }
}

export default Server;
