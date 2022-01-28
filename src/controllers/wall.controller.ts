import { Request, Response } from 'express';
import { WallService } from '../services';

const wallService = new WallService();

const getAllWalls = (req: Request, res: Response) => {
  const walls = wallService.getAllWalls();

  res.json({
    walls,
  });
};

const getWallById = (req: Request, res: Response) => {
  const { id } = req.params;
  const wall = wallService.getWallById(id);

  res.json({
    wall,
  });
};

export { getAllWalls, getWallById };
