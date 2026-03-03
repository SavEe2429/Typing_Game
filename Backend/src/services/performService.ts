import { PerformanceRepository } from '../repositories/PerformanceRepository';
import {Performance,  IPerformanceSchema } from '../models/Performance';

export class PerformanceService {

    async savePerformance(data: IPerformanceSchema) {
        try {
            const repo = new PerformanceRepository();

            if (data.wpm < 0 || data.wpm > 350) {
                throw new Error('WPM invalid');
            }
            if (data.accuracy < 0 || data.accuracy > 100) {
                throw new Error('Accuracy invalid');
            }

            const cleanData = {
                ...data,
                wpm: data.wpm,
                accuracy: data.accuracy,
                duration: data.duration
            };

            //เรียกใช้ Repo เพื่อบันทึก
            const result = await repo.create(cleanData);
            return { message: 'Save success', data: result };

        } catch (err) {
            console.error('[Service Error]:', err);
            throw err; //โยน Error กลับไปให้ Controller
        }
    }

    async getPerformanceService() {
        const repo = new PerformanceRepository();
        const performance = await repo.findAll();
        if (!performance) {
            throw new Error("Fetch Error")
        }

        return  performance 

    }
}