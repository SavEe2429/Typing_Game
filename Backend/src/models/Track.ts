import mongoose, { Schema } from "mongoose";

interface ITrackSchema {
    text: string;
}

const TrackSchema = new Schema<ITrackSchema>({
    text: { type: String, required: true, lowercase:true, unique: true },
});

export const Track = mongoose.model<ITrackSchema>('Track' , TrackSchema);