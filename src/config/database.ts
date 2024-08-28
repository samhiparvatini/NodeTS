import { Sequelize } from 'sequelize';
import { ENV } from './env';

export const sequelize = new Sequelize({
    database: 'books',
    username: 'sammyparvatini',
    password: 'SPcapitals26',
    host: 'localhost',
    dialect: 'postgres',
    port: 5432,
    logging: false,
});