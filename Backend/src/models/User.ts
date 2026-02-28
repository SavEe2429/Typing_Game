import { timeStamp } from "console";
import mongoose, { Schema } from "mongoose";

interface IUser {
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

export const User = mongoose.model<IUser>('USER' , userSchema);