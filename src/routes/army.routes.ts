import { Router } from 'express';
import { getAllArmys, getArmyById } from '../controllers/army.controller';

const router = Router();

router.get('/', getAllArmys);

router.get('/:id', getArmyById);

export default router;
