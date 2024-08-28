import { Request, Response } from 'express';
import * as studentService from '../services/studentService';

export const createStudent = async (req: Request, res: Response) => {
    try {
        const student = await studentService.createStudent(req.body);
        res.status(201).json(student);
    } catch (error) {
        const errorMessage = (error as Error).message;
        res.status(500).json({ error: errorMessage });    }
};

export const getAllStudents = async (req: Request, res: Response) => {
    try {
        const students = await studentService.getAllStudents();
        res.status(200).json(students);
    } catch (error) {
        const errorMessage = (error as Error).message;
        res.status(500).json({ error: errorMessage });    }
};

export const getStudentById = async (req: Request, res: Response) => {
    try {
        const student = await studentService.getStudentById(parseInt(req.params.studentId));
        if (!student) {
            return res.status(404).json({ error: 'Student not found' });
        }
        res.status(200).json(student);
    } catch (error) {
        const errorMessage = (error as Error).message;
        res.status(500).json({ error: errorMessage });    }
};

export const updateStudent = async (req: Request, res: Response) => {
    try {
        const student = await studentService.updateStudent(parseInt(req.params.studentId), req.body);
        res.status(200).json(student);
    } catch (error) {
        const errorMessage = (error as Error).message;
        res.status(500).json({ error: errorMessage });    }
};

export const deleteStudent = async (req: Request, res: Response) => {
    try {
        await studentService.deleteStudent(parseInt(req.params.studentId));
        res.status(204).send();
    } catch (error) {
        const errorMessage = (error as Error).message;
        res.status(500).json({ error: errorMessage });    }
};
