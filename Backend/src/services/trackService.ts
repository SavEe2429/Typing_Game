import { TrackRepository } from "../repositories/TrackRepository";

export class TrackService {

    async getWordList() {
        const repo = new TrackRepository();
        return await repo.findAll();
    }

    async addWord(word: string) {
        const repo = new TrackRepository();

        //เช็คค่าว่าง
        if (!word || word.trim() === '') {
            throw new Error('Please put a word');
        }

        // แยกคำจาก space / newline
        const words = word
            .split(/\s+/)
            .map(w => w.trim().toLowerCase())
            .filter(w => w !== "");

        // กัน duplicate ใน request เดียวกัน
        const uniqueWords = [...new Set(words)];

        const results = [];

        for (const w of uniqueWords) {
            const isExist = await repo.findByWord(w);

            if (isExist) {
                console.log("Skip duplicate:", w);
                continue;
            }

            const created = await repo.create(w);
            results.push(created);
        }

        return results;
    }

    async deleteWord(id: string) {
        const repo = new TrackRepository();

        const deletedTrack = await repo.delete(id);

        if (!deletedTrack) {
            throw new Error('Word not found');
        }

        return { message: 'Delete word successfully!' };
    }

    async generateRandomWords(amount: number) {
        const repo = new TrackRepository();
        const allRecords = await repo.findAll();

        if (!allRecords || allRecords.length === 0) {
            return ["NoDataInDatabase"];
        }

        const shuffled = [...allRecords].sort(() => 0.5 - Math.random());

        return shuffled.slice(0, amount).map((item: any) => item.word);
    }
}