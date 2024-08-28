import Student from '../models/student';
import { sequelize } from '../config/database';
import { QueryTypes } from 'sequelize';

export const createStudent = async (data: { firstName: string; lastName: string; school: string; grade: string; }) => {
    const query = `
        INSERT INTO students (firstName, lastName, school, grade)
        VALUES (:firstName, :lastName, :school, :grade)
        RETURNING *;
    `;
    const result = await sequelize.query(query, {
        replacements: data,
        type: QueryTypes.INSERT,
    });
    return result[0]; //returning the inserted student record
};

export const getAllStudents = async () => {
    const query = `
        SELECT * FROM students;
    `;
    const students = await sequelize.query(query, {
        type: QueryTypes.SELECT,
    });
    return students;
};


export const getStudentById = async (studentId: number) => {
    const query = `
        SELECT * FROM students WHERE studentId = :studentId;
    `;
    const students = await sequelize.query(query, {
        replacements: { studentId },
        type: QueryTypes.SELECT,
    });
    return students[0]; //return the first result (or undefined if not found)
};


export const updateStudent = async (studentId: number, data: { firstName?: string; lastName?: string; school?: string; grade?: string; }) => {
    const query = `
        UPDATE students
        SET firstName = :firstName, lastName = :lastName, school = :school, grade = :grade
        WHERE studentId = :studentId
        RETURNING *;
    `;
    const result = await sequelize.query(query, {
        replacements: { studentId, ...data },
        type: QueryTypes.UPDATE,
    });
    return result[0]; //returning the updated student record
};


export const deleteStudent = async (studentId: number) => {
    const query = `
        DELETE FROM students WHERE studentId = :studentId
        RETURNING *;
    `;
    const result = await sequelize.query(query, {
        replacements: { studentId },
        type: QueryTypes.DELETE,
    });
    return true; //returning a success indicator
};
