import { useState } from 'react';
import { api } from '../api/axios';

export const useDeleteWord = (setWordlist: any) => {
    const [isDeleting, setIsDeleting] = useState(false);

    const deleteWord = async (id: string) => {
        setIsDeleting(true);
        try {
            await api.delete(`/tracks/${id}`);

            setWordlist((prev: any[]) => prev.filter((item: any) => item._id !== id));

            return true;
        } catch (error) {
            console.error("Cannot Deleted:", error);
            return false;
        } finally {
            setIsDeleting(false);
        }
    };

    return { deleteWord, isDeleting };
};