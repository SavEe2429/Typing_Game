import { timeStamp } from "console";
import mongoose, { Schema } from "mongoose";
// ต้องใช้ require เพราะ mongoose-sequence ยังไม่รองรับ ES Module เต็มรูปแบบในบางเวอร์ชัน
const AutoIncrement = require('mongoose-sequence')(mongoose);

interface IUser {
    id: number; 
    email: string;
    password: string;
    username: string;
    role: 'ADMIN' | 'USER';
}

const userSchema = new Schema<IUser>({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    username: { type: String, required: true },
    role: { type: String, enum: ['USER', 'ADMIN'], default: 'USER' }
}, { timestamps: true });

userSchema.plugin(AutoIncrement, {inc_field : 'id'});

export const User = mongoose.model<IUser>('USER' , userSchema);