import mongoose, { Schema } from "mongoose";

interface ITrackSchema {
    word: string;
}

const TrackSchema = new Schema<ITrackSchema>({
    word: { type: String, required: true, lowercase:true, unique: true },
});

export const Track = mongoose.model<ITrackSchema>('Track' , TrackSchema);