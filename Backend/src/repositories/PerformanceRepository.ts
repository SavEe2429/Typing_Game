import { Performance } from '../models/Performance';

export class PerformanceRepository {
    async create(data: any) {
        const newRecord = new Performance(data);
        return await newRecord.save();
    }

    async findAll() {
        return await Performance.aggregate([
        // 1. เรียงลำดับตาม WPM จากมากไปน้อยก่อน
        { $sort: { wpm: -1 } },

        // 2. Group ตาม userEmail (หรือ email)
        {
            $group: {
                _id: "$userEmail", // ใช้ฟิลด์ userEmail เป็นตัวแบ่งกลุ่ม
                username: { $first: "$username" }, // เอา username แรกที่เจอ (ซึ่งคืออันที่ WPM สูงสุดเพราะเรา sort ไว้แล้ว)
                bestWpm: { $max: "$wpm" } // เลือกค่า wpm ที่สูงที่สุดในกลุ่ม
            }
        },

        // 3. เรียงลำดับผลลัพธ์สุดท้ายตามคะแนนจากมากไปน้อยอีกครั้ง
        { $sort: { bestWpm: -1 } },

        // 4. ปรับโครงสร้างข้อมูลให้ใช้ง่าย (Optional)
        {
            $project: {
                _id: 0, // ไม่เอา _id
                username: 1,
                wpm: "$bestWpm"
            }
        }
    ]);
    }
}