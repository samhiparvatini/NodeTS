import { Sequelize } from 'sequelize';
import { ENV } from './env';

export const sequelize = new Sequelize({
    database: 'your_database_name',
    username: 'your_database_user',
    password: 'your_database_password',
    host: 'localhost',
    dialect: 'postgres',
    port: 5432,
    logging: false,
});