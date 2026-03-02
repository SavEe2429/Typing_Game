import { timeStamp } from "console";
import mongoose, { Schema } from "mongoose";

export interface IPerformanceSchema {
    userEmail: string;
    wpm: number;
    accuracy: number;
    duration: number;
    mode: string;
}

const PerformanceSchema = new Schema<IPerformanceSchema>({
    userEmail: { type: String, required: true },
    wpm: { type: Number, required: true },
    accuracy: { type: Number, required: true },
    duration: { type: Number, required: true},
    mode: { type: String, default: 'quickplay' }
}, { timestamps: true });

export const Performance = mongoose.model<IPerformanceSchema>('Performance' , PerformanceSchema);