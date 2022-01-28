import { Wall } from '../models';
import { walls } from '../mock';

class WallService {
  private walls: Wall[];

  constructor() {
    this.walls = walls;
  }

  public getAllWalls(): Wall[] {
    return this.walls;
  }

  public getWallById(id: string): Wall[] {
    return this.walls.filter((wall) => wall.id === id);
  }
}

export default WallService;
