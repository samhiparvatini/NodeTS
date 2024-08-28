import { Router } from 'express';
import { sampleHandler } from '../handlers/sampleHandler';

const router = Router();

router.get('/sample', sampleHandler);

export default router;