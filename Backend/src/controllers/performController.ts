import { type Request, type Response } from 'express';
import { PerformanceService } from '../services/performService';

const service = new PerformanceService();

export class PerformanceController {

  static async savePerformance(req: Request, res: Response) {
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

  static async getPerformance(req:Request , res:Response) {
    try{
      const result = await service.getPerformanceService();
      return res.status(200).json({
        message:"Fetch Successful",result
      })
    }catch(err : any){
      res.status(500).json({ error: err.message || 'Cannot fetch performance' });
    }
  }
}