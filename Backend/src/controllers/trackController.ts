import { Request, Response } from 'express';
import { TrackService } from '../services/trackService';

const service = new TrackService();

export class TrackController {

    static async getTracks(req: Request, res: Response) {
        try {
            const tracks = await service.getWordList();
            res.status(200).json(tracks);
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }

    static async addTrack(req: Request, res: Response) {
        try {

            const { word } = req.body;
            const result = await service.addWord(word);
            res.status(201).json({ message: 'Add word Successfully', data: result });
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }

    static async deleteTrack(req: Request, res: Response) {
        try {
            const id = req.params.id as string;
            const result = await service.deleteWord(id);
            res.status(200).json(result);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }

    static async generateWords(req: Request, res: Response) {
        try {
            const amount = Number(req.query.amount) || 10;

            const words = await service.generateRandomWords(amount);

            res.status(200).json({ words });
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }
}