import { useEffect, useRef, useState } from "react";
import { savePerformanceData } from "../services/performanceService";

export const useSaveScore = (
    email: string | null | undefined,
    username: string | null | undefined,
    wpm: number,
    acc: number,
    time_sec: number,
    mode: string = "quickplay",
    disableSave: boolean = false
) => {
    const hasSaved = useRef(false);
    const [isSaving, setIsSaving] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (disableSave) return;

        const saveScore = async () => {
            if (email && username && time_sec > 0 && !hasSaved.current) {
                hasSaved.current = true;
                setIsSaving(true);
                try {
                    await savePerformanceData(email, username, wpm, acc, time_sec, mode);

                    hasSaved.current = true;
                } catch (err: any) {
                    console.error("Error:", err);
                    setError(err.message || "Failed to save score");
                } finally {
                    setIsSaving(false);
                }
            }
        };

        saveScore();
    }, [email, username, wpm, acc, time_sec, mode]);

    return { isSaving, error };
};