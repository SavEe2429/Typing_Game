import { useState, useEffect, useCallback } from 'react';
import { api } from '../api/axios';

export const useWordList = () => {
    const [Wordlist, setWordlist] = useState<{ _id: string, word: string }[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchWords = useCallback(async () => {
        setIsLoading(true);
        try {
            const response = await api.get("/tracks/all");
            setWordlist(response.data);
        } catch (error) {
            console.error("Wordlist Error:", error);
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchWords();
    }, [fetchWords]);

    return { Wordlist, setWordlist, isLoading };
};