// router file
import { Router } from 'express';
import { Hello, Status } from './controller';

const router = Router();

console.log('router');

router.get('/status', Status);
router.get('/hello', Hello);

export default router;