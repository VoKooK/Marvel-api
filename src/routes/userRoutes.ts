import { Router } from 'express';
import { allCharacters } from '../controllers/userController';

const router = Router();

router.get('/allCharacters', allCharacters);

export default router;