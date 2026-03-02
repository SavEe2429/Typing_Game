import { api } from "../api/axios";
import type { TrackedWord } from "./useWordList";

export const useDeleteWord = (
    setWordlist: React.Dispatch<React.SetStateAction<TrackedWord[]>>
) => {

    const deleteWord = async (id: string) => {
        try {
            await api.delete(`/track/delete/${id}`);

            setWordlist(prev =>
                prev.filter(word => word._id !== id)
            );

            alert("Word deleted successfully");

        } catch (err: any) {
            alert("Delete failed");
            console.error(err);
        }
    };

    return { deleteWord };
};