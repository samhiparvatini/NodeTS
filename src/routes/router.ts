import { Router } from 'express';
import { sampleHandler } from '../handlers/sampleHandler';
import * as studentHandler from '../handlers/studentHandler';

const router = Router();

router.get('/sample', sampleHandler);

// Student CRUD routes
router.post('/students', studentHandler.createStudent);
router.get('/students', studentHandler.getAllStudents);
router.get('/students/:studentId', studentHandler.getStudentById);
router.put('/students/:studentId', studentHandler.updateStudent);
router.delete('/students/:studentId', studentHandler.deleteStudent);

export default router;