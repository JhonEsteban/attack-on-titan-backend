import { Request, Response } from 'express';
import { ArmyService } from '../services';

const armyService = new ArmyService();

const getAllArmys = (req: Request, res: Response) => {
  const armys = armyService.getAllArmys();

  res.json({
    armys,
  });
};

const getArmyById = (req: Request, res: Response) => {
  const { id } = req.params;
  const army = armyService.getArmyById(id);

  res.json({
    army,
  });
};

export { getAllArmys, getArmyById };
