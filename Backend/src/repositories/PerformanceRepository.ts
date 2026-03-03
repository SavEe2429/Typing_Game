import { Performance } from '../models/Performance';

export class PerformanceRepository {
    async create(data: any) {
        const newRecord = new Performance(data);
        return await newRecord.save();
    }

    async findAll() {
        return await Performance.find().select('username wpm -_id').sort({ wpm: -1 }).lean();
    }
}