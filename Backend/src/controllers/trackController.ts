import { Track } from "../models/Track"
import { Request, Response } from 'express';

export const addWords = async (req: Request, res: Response) => {
    try {

        const { text } = req.body
        if (!text) {
            res.status(400).json({ message: "Please put a text" })
            return;
        }

        const wordArray = text
            .split(/\s+/) //หั่นช่องว่าง
            .map((word: string) => word.toLowerCase().trim()) //แยกคำ และทำให้เป็นตัวเล็ก
            .filter((word: string) => word.length > 0); //ตัดช่องว่างที่ไม่จำเป็นออก

        if (wordArray.length === 0) {
            res.status(400).json({ message: "There are any word in array" });
            return;
        }

        let addedCount = 0;
        let duplicateCount = 0;

        const existingWords = await Track.find({
            text: { $in: wordArray }
        });

        if (existingWords.length > 0) {
            const duplicates = existingWords.map(w => w.text);

            return res.status(400).json({
                message: "Duplicate words found",
                duplicates
            });
        }

        // วนลูปบันทึก
        for (const w of wordArray) {
            try {
                const newTrack = new Track({ text: w });
                await newTrack.save();
                addedCount++;
            } catch (err: any) {
                if (err.code === 11000) {
                    duplicateCount++; // ถ้าซ้ำก็ข้ามไป
                } else {
                    throw err;
                }
            }
        }

        res.status(201).json({ message: "Add Words Successfully!" })

    } catch (err: any) {
        res.status(500).json({
            message: err.message || "Add Words Failed"
        })
    }
}

export const GenerateWords = async (req: Request, res: Response) => {
    try {
        //ดึงคำจาก database ออกมา 25 คำโดยใช้ aggregate ($sample) ในการสุ่มคำ
        const randomWords = await Track.aggregate([{ $sample: { size: 50 } }])

        //แมปแค่คอลลัมน์ text ออกมา
        const genWords = randomWords.map(({ text }) => text)

        res.status(200).json({ words: genWords })
    } catch (err: any) {
        res.status(400).json({
            message: err.message || "Generate Word Failed"
        })
    }
}

export const DeleteWord = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const deleted = await Track.findByIdAndDelete(id);

        if (!deleted) {
            res.status(404).json({ message: "Word not found" });
            return;
        }

        res.status(200).json({ message: "Word deleted successfully" });
    } catch (err: any) {
        res.status(500).json({ message: err.message || "Delete Failed" });
    }
}

export const getAllWords = async (req: Request, res: Response) => {
    try {
        const words = await Track.find().sort({ text: 1 }); // 1 คือเรียง A-Z
        res.status(200).json(words);
    } catch (err: any) {
        res.status(500).json({ message: "Error fetching words" });
    }
}