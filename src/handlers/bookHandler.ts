import { Request, Response } from 'express';
import * as bookService from '../services/bookService';

export const createBook = async (req: Request, res: Response) => {
    try {
        const book = await bookService.createBook(req.body);
        res.status(201).json(book);
    } catch (error) {
        const errorMessage = (error as Error).message;
        res.status(500).json({ error: errorMessage });    }
};

export const getAllBooks = async (req: Request, res: Response) => {
    try {
        const books = await bookService.getAllBooks();
        res.status(200).json(books);
    } catch (error) {
        const errorMessage = (error as Error).message;
        res.status(500).json({ error: errorMessage });    }
};

export const getBookById = async (req: Request, res: Response) => {
    try {
        const book = await bookService.getBookById(parseInt(req.params.bookId));
        if (!book) {
            return res.status(404).json({ error: 'Book not found' });
        }
        res.status(200).json(book);
    } catch (error) {
        const errorMessage = (error as Error).message;
        res.status(500).json({ error: errorMessage });    }
};

export const updateBook = async (req: Request, res: Response) => {
    try {
        const book = await bookService.updateBook(parseInt(req.params.bookId), req.body);
        res.status(200).json(book);
    } catch (error) {
        const errorMessage = (error as Error).message;
        res.status(500).json({ error: errorMessage });    }
};

export const deleteBook = async (req: Request, res: Response) => {
    try {
        await bookService.deleteBook(parseInt(req.params.bookId));
        res.status(204).send();
    } catch (error) {
        const errorMessage = (error as Error).message;
        res.status(500).json({ error: errorMessage });    }
};
