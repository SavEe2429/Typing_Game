import { type Request, type Response } from 'express';
import { PerformanceService } from '../services/performService';

const service = new PerformanceService();

export class PerformanceController {

  static async getPerformance(req: Request, res: Response) {
    try {
      const { userEmail, username, wpm, accuracy, duration, mode } = req.body;

      const result = await service.savePerformance({
        userEmail,
        username,
        wpm,
        accuracy,
        duration,
        mode
      });

      res.status(201).json(result);
    } catch (error: any) {
      console.error(error);
      res.status(500).json({ error: error.message || 'Cannot save performance' });
    }
  }
}