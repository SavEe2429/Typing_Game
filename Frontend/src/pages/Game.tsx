import { useEffect } from "react";
import { useGameEngine } from "../hooks/useGameEngine";
import { useTyping } from "../hooks/useTyping";
import { Summary } from "../components/summary/Summary";
import { ProgressBar } from "../components/game/Progress";
import { TypingBoard } from "../components/game/TypingBoard";
import { CountdownTimer } from "../components/game/CountdownTimer";

export const GamePage = () => {

    const { words, countdown, isGameReady, startTime, endTime, finishGame, restartGame } = useGameEngine(25);
    const { userInput, totalKeystrokes, errorCount, errorIndex, wrongWords, resetTyping } = useTyping(isGameReady ? words : "");

    //เมื่อพิมพ์ครบ 25 คำ จะบันทึกเวลา
    useEffect(() => {
        if (userInput.length === words.length) {
            finishGame()
        }
    }, [userInput, words, finishGame])

    //เมื่อกดปุ่ม play again
    const handlePlayAgain = () => {
        restartGame();
        resetTyping();
    }

    return (
        <>
            <div className="flex flex-col min-h-screen p-4">
                <main className="flex flex-grow bg-[#1A1A1C] items-center justify-center items-start px-6 sm:px-8">

                    {/* ส่งค่าไปให้ summary เมื่อจบเกม */}
                    {endTime && startTime ? (
                        <Summary
                            userInput={userInput}
                            targetText={words}
                            totalKeystrokes={totalKeystrokes}
                            errorCount={errorCount}
                            wrongWords={wrongWords}
                            startTime={startTime}
                            endTime={endTime}
                            onRestart={handlePlayAgain}
                        />
                    ) : (
                        <div className="flex flex-col w-full max-w-5xl gap-4">
                            <CountdownTimer count={countdown} />

                            <div className="flex gap-8 w-full justify-center pb-3">
                                <p className="px-6 py-2 text-white text-3xl font-bold border-b-2 border-indigo-500">Quick Play</p>
                            </div>

                            <div className="flex flex-col w-full max-w-4xl gap-4 px-4">
                                <TypingBoard
                                    words={words}
                                    userInput={userInput}
                                    errorIndex={errorIndex}
                                />
                                <ProgressBar
                                    currentLength={userInput.length}
                                    totalLength={words.length}
                                    playerName="Player 1"
                                />
                            </div>
                        </div>
                    )}
                </main>
            </div>
        </>
    )
}