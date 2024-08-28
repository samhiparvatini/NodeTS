import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../config/database';

interface StudentAttributes {
    studentId: number;
    firstName: string;
    lastName: string;
    school: string;
    grade: string;
}

interface StudentCreationAttributes extends Optional<StudentAttributes, 'studentId'> {}

class Student extends Model<StudentAttributes, StudentCreationAttributes> implements StudentAttributes {
    public studentId!: number;
    public firstName!: string;
    public lastName!: string;
    public school!: string;
    public grade!: string;
}

Student.init(
    {
        studentId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        school: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        grade: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        tableName: 'students',
    }
);

export default Student;
