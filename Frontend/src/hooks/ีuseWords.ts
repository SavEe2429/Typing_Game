import { useCallback, useEffect, useState } from "react";
import { api } from "../api/axios";

export const useWords = (count: number) => {
    const [words, setWords] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchWords = useCallback(async () => {
        try {
            setLoading(true);

            const res = await api.get("/track/generatewords");

            // backend ส่ง { words: [] }
            setWords(res.data.words.slice(0, count));

        } catch (err) {
            console.error("Fetch words failed", err);
        } finally {
            setLoading(false);
        }
    }, [count]);

    useEffect(() => {
        fetchWords();
    }, [fetchWords]);

    return {
        words,
        loading,
        updateWords: fetchWords
    };
}