import { timeStamp } from "console";
import mongoose, { Schema } from "mongoose";

interface IPerformanceSchema {
    userEmail: string;
    wpm: number;
    accuracy: number;
    mode: string;
}

const PerformanceSchema = new Schema<IPerformanceSchema>({
    userEmail: { type: String, required: false },
    wpm: { type: Number, required: true },
    accuracy: { type: Number, required: true },
    mode: { type: String, default: 'quickplay' }
}, { timestamps: true });

export const Performance = mongoose.model<IPerformanceSchema>('Performance' , PerformanceSchema);