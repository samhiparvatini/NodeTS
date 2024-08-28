import { Request, Response } from 'express';
import { sampleService } from '../services/sampleService';

export const sampleHandler = (req: Request, res: Response) => {
    const result = sampleService();
    res.json({ message: 'Sample Handler Response', result });
};