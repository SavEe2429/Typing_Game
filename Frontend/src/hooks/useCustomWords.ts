import { useState, useCallback } from "react";

export const useCustomWords = () => {
    const [customText, setCustomText] = useState<string | null>(null);

    const setWords = useCallback((text: string) => {
        setCustomText(text);
    }, []);

    const clearWords = useCallback(() => {
        setCustomText(null);
    }, []);

    return { customText, setWords, clearWords };
};