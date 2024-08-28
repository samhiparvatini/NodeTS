import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../config/database';

interface BookAttributes {
    bookId: number;
    title: string;
    author: string;
    genre: string;
    publicationDate: Date;
}

interface BookCreationAttributes extends Optional<BookAttributes, 'bookId'> {}

class Book extends Model<BookAttributes, BookCreationAttributes> implements BookAttributes {
    bookId!: number;
    title!: string;
    author!: string;
    genre!: string;
    publicationDate!: Date;
}

Book.init(
    {
        bookId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        genre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        publicationDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    },
    {
        sequelize,
        tableName: 'books',
    }
);

export default Book;
