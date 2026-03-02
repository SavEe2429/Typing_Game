import { Track } from '../models/Track';

export class TrackRepository {

    async findAll() {
        return await Track.find().sort({ createdAt: -1 }).lean();
    }

    async findByWord(text: string) {
        return await Track.findOne({ word: text }).lean();
    }

    async create(text: string) {
        const newTrack = new Track({ word: text });
        return await newTrack.save();
    }

    async delete(id: string) {
        return await Track.findByIdAndDelete(id);
    }
}