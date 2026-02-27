import { useEffect, useMemo } from 'react';
import { useState } from 'react';
import { faker } from '@faker-js/faker';
import { useTyping } from '../hooks/useTyping';
import { ProgressBar } from './Progress';
import { Summary } from './Summary/Summary';
import { CountdownOverlay } from './CountdownTimer';
import UserTyping from "./UserTyping";

export default function TypingBoard() {
    //สร้างคำขึ้นมา 25 คำ
    //useMemo เอาไว้กัน refresh ขณะพิมพ์
    const words = useMemo(() => faker.word.words(25), []);

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
    }, [countdown])

    const { userInput, totalKeystrokes, errorCount, errorIndex, wrongWords } = useTyping(isGameReady ? words : "");

    //เมื่อพิมพ์ครบ 25 คำ จะบันทึกเวลา
    useEffect(() => {
        if (userInput.length === words.length) {
            setEndTime(Date.now())
        }
    }, [userInput, words, endTime])

    // คำนวณ Progress เป็น %
    const progress = useMemo(() => {
        if (words.length === 0) return 0
        return (userInput.length / words.length) * 100;
    }, [userInput, words]);

    return (
        <div className="flex flex-col min-h-screen">
            <main className='flex flex-grow bg-[#1A1A1C] items-center justify-center items-start pt-24'>
                
                {/* ส่งค่าไปให้ summary เมื่อจบเกม */}
                {endTime && startTime ? (
                    <Summary
                        userInput={userInput}
                        targetText={words}
                        totalKeystrokes={totalKeystrokes}
                        errorCount={errorCount}
                        wrongWords={wrongWords}
                        startTime={startTime}
                        endTime={endTime} />
                ) : (
                    <>
                        <CountdownOverlay count={countdown}/>

                        <div className="flex flex-col w-full max-w-4xl gap-4 px-4">
                            <div className="flex bg-neutral-primary-soft block max-w-4xl p-6 border border-indigo-500 rounded-xl shadow-xs mb-6">
                                <UserTyping targetText={words} userInput={userInput} errorIndex={errorIndex}/>
                            </div>
                            <ProgressBar progress={progress} />
                        </div>
                    </>
                )}
            </main>
        </div>

    );
}