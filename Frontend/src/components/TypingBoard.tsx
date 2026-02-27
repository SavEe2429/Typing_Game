import { useMemo } from 'react';
import { faker } from '@faker-js/faker';
import { useTyping } from '../hooks/useTyping';
import { Navbar } from '../layouts/Navbar';
import UserTyping from "./UserTyping"

export default function TypingBoard() {
    const words = useMemo(() => faker.word.words(25), []);
    const { userInput } = useTyping();

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className='flex flex-grow bg-[#1A1A1C] items-center justify-center items-start pt-24'>
                <div className="flex bg-neutral-primary-soft block max-w-4xl p-6 border border-indigo-500 rounded-xl shadow-xs">
                    <div>
                        <UserTyping targetText={words} userInput={userInput} />
                    </div>
                </div>
            </main>


        </div>

    );
}