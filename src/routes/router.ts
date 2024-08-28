import { Router } from 'express';
import { sampleHandler } from '../handlers/sampleHandler';
import * as bookHandler from '../handlers/bookHandler';

const router = Router();

router.get('/sample', sampleHandler);

// Student CRUD routes
router.post('/books', bookHandler.createBook);
router.get('/books', bookHandler.getAllBooks);
router.get('/books/:bookId', bookHandler.getBookById);
router.put('/books/:bookId', bookHandler.updateBook);
router.delete('/books/:bookId', bookHandler.deleteBook);

export default router;