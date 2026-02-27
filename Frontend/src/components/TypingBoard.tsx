import { useEffect, useMemo } from 'react';
import { useState } from 'react';
import { faker } from '@faker-js/faker';
import { useTyping } from '../hooks/useTyping';
import UserTyping from "./UserTyping"
import ProgressBar from './Progress';

export default function TypingBoard() {
    //สร้างคำขึ้นมา 25 คำ
    //useMemo เอาไว้กัน refresh ขณะพิมพ์
    const words = useMemo(() => faker.word.words(25), []);

    //countdown timer
    const [countdown, setCountdown] = useState(3);
    const [isGameReady, setIsGameReady] = useState(false);

    useEffect(() => {
        if (countdown > 0) {
            const timer = setTimeout(() => setCountdown(prev => prev - 1), 1000);
            return () => clearTimeout(timer);
        } else {
            setIsGameReady(true);
        }
    }, [countdown])

    const { userInput } = useTyping(isGameReady ? words : "")

    // คำนวณ Progress เป็น %
    const progress = useMemo(() => {
        if (words.length === 0) return 0;
        return (userInput.length / words.length) * 100;
    }, [userInput, words]);

    return (
        <div className="flex flex-col min-h-screen">
            <main className='flex flex-grow bg-[#1A1A1C] items-center justify-center items-start pt-24'>
                {countdown > 0 && (
                    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-[#1A1A1C]/80 backdrop-blur-sm">
                        <h1 className="text-9xl font-black text-indigo-500 animate-pulse">
                            {countdown}
                        </h1>
                    </div>
                )}
                <div className="flex flex-col w-full max-w-4xl gap-4 px-4">
                    <div className="flex bg-neutral-primary-soft block max-w-4xl p-6 border border-indigo-500 rounded-xl shadow-xs mb-6">
                        <UserTyping targetText={words} userInput={userInput} />
                    </div>
                    <ProgressBar progress={progress} />
                </div>
            </main>
        </div>

    );
}