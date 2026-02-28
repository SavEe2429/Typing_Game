import mongoose, { mongo } from "mongoose";

export const conn = async () => {
    try{
        await mongoose.connect(process.env.DATABASE_URL || '');
        console.log('MongoDB Connected...')
    }catch(err){
        console.error('Database connection error:' , err)
        process.exit(1);
    }
};