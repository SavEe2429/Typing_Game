import { useState, useEffect, useCallback } from 'react';
import { useWords } from './ีuseWords';

export const useGameEngine = (wordCount: number) => {

    const { words, updateWords } = useWords(wordCount);

    const [countdown, setCountdown] = useState(3);
    const [isGameReady, setIsGameReady] = useState(false);

    const [startTime, setStartTime] = useState<number | null>(null);
    const [endTime, setEndTime] = useState<number | null>(null);

    //countdown timer นับเวลา 3 วินาที ก่อนเริ่มพิมพ์
    useEffect(() => {
        if (countdown > 0) {
            const timer = setTimeout(() => setCountdown(prev => prev - 1), 1000);
            return () => clearTimeout(timer)
        } else {
            setIsGameReady(true)
            setStartTime(Date.now())
        }
    }, [countdown, isGameReady])

    //ฟังก์ชันสำหรับปุ่ม Play Again
    const restartGame = useCallback(() => {
        updateWords(); //สั่งให้สุ่มคำชุดใหม่จาก useWords
        setCountdown(3);
        setIsGameReady(false);
        setStartTime(null);
        setEndTime(null);
    }, [updateWords]);

    return {
        words,
        countdown,
        isGameReady,
        startTime,
        endTime,
        setEndTime,
        restartGame
    };

}