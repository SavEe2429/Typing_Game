import { useState, useEffect, useCallback } from "react";

export const useCustomEngine = (customText: string | null) => {

    const [countdown, setCountdown] = useState(3);
    const [isGameReady, setIsGameReady] = useState(false);

    const [startTime, setStartTime] = useState<number | null>(null);
    const [endTime, setEndTime] = useState<number | null>(null);

    //countdown timer นับเวลา 3 วินาที เมื่อกดปุ่ม Play หลังจากใส่ customText เสร็จ
    useEffect(() => {
        if (customText !== null && !isGameReady) {
            if (countdown > 0) {
                const timer = setTimeout(() => setCountdown((prev) => prev - 1), 1000);
                return () => clearTimeout(timer);
            } else {
                setIsGameReady(true);
                setStartTime(Date.now());
            }
        }
    }, [customText, countdown, isGameReady]);

    //เก็บเวลาเมื่อ finish
    const finishGame = useCallback(() => {
        setEndTime(Date.now());
    }, []);

    //ฟังก์ชันสำหรับปุ่ม Play Again    
    const restartGame = useCallback(() => {
        setCountdown(3);
        setIsGameReady(false);
        setStartTime(null);
        setEndTime(null);
    }, []);

    return { 
        countdown, 
        isGameReady, 
        startTime, 
        endTime, 
        finishGame, 
        restartGame 
    };
};