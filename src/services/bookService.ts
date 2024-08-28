import Book from '../models/book';
import { sequelize } from '../config/database';
import { QueryTypes } from 'sequelize';

export const createBook = async (data: { title: string; author: string; genre: string; publicationDate: Date; }) => {
    try {
        const query = `
            INSERT INTO books.books ("bookId", title, author, genre, "publicationDate")
            VALUES (:bookId, :title, :author, :genre, NOW())
            RETURNING *;
        `;
        const result = await sequelize.query(query, {
            replacements: data,
            type: QueryTypes.RAW, // Get the raw query result
        });
        
        return result[0][0]; // Return the first inserted record
    } catch (error) {
        console.error('Error inserting book:', error);
        throw error; // Handle or propagate the error as needed
    } 
};

export const getAllBooks = async () => {
    const query = `
        SELECT * FROM books.books;
    `;
    const books = await sequelize.query(query, {
        type: QueryTypes.SELECT,
    });
    return books;
};


export const getBookById = async (bookId: number) => {
    const query = `
        SELECT * FROM books.books WHERE "bookId" = :bookId;
    `;
    const students = await sequelize.query(query, {
        replacements: { bookId },
        type: QueryTypes.SELECT,
    });
    return students[0]; //return the first result (or undefined if not found)
};


export const updateBook = async (bookId: number, data: { title?: string; author?: string; genre?: string; publicationDate?: Date; }) => {
    const query = `
        UPDATE books.books
        SET title = :title, author = :author, genre = :genre, "publicationDate" = NOW()
        WHERE "bookId" = :bookId
        RETURNING *;
    `;
    const result = await sequelize.query(query, {
        replacements: { bookId, ...data },
        type: QueryTypes.UPDATE,
    });
    return result[0]; //returning the updated student record
};


export const deleteBook = async (bookId: number) => {
    const query = `
        DELETE FROM books.books WHERE "bookId" = :bookId
        RETURNING *;
    `;
    const result = await sequelize.query(query, {
        replacements: { bookId },
        type: QueryTypes.DELETE,
    });
    return true; //returning a success indicator
};
