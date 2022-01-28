import { Router } from 'express';
import { getAllWalls, getWallById } from '../controllers/wall.controller';

const router = Router();

router.get('/', getAllWalls);

router.get('/:id', getWallById);

export default router;
