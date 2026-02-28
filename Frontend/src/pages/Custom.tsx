import { useEffect } from "react";
import { CustomInputText } from "../components/custom/CustomInputText";
import { ProgressBar } from "../components/game/Progress";
import { Summary } from "../components/summary/Summary";
import { CountdownTimer } from "../components/game/CountdownTimer";
import { useTyping } from "../hooks/useTyping";
import { TypingBoard } from "../components/game/TypingBoard";
import { useCustomWords } from "../hooks/useCustomWords";
import { useCustomEngine } from "../hooks/useCustomEngine";

export const CustomPage = () => {

    const { customText, setWords, clearWords } = useCustomWords()

    const { countdown, isGameReady, startTime, endTime, finishGame, restartGame } = useCustomEngine(customText)

    const { userInput, totalKeystrokes, errorCount, errorIndex, wrongWords, resetTyping } = useTyping(isGameReady && customText ? customText : "")

    useEffect(() => {
        if (customText && isGameReady && userInput.length === customText.length) {
            finishGame();
        }
    }, [userInput.length, customText, isGameReady, finishGame]);

    const handleStartCustomGame = (text: string) => {
        setWords(text);
        restartGame();
        resetTyping();
    };

    const handleChangeText = () => {
        clearWords();
        restartGame();
        resetTyping();
    }

    const handlePlayAgain = () => {
        if (customText) handleStartCustomGame(customText);
    };

    return (
        <div className="flex flex-col w-full p-4">
            <main className="flex flex-col w-full flex-grow bg-[#1A1A1C] items-center px-6 sm:px-8">

                {/* ถ้ายังไม่มีข้อความ โชว์หน้า CustomInputText */}
                {customText === null ? (
                    <CustomInputText onStart={handleStartCustomGame} />
                ) : (
                    /* ถ้ามีข้อความแล้ว ให้เริ่มเกม */
                    <div className="flex flex-col w-full max-w-5xl gap-4">
                        {endTime && startTime ? (
                            <div className="flex flex-col items-center">
                                <Summary
                                    userInput={userInput}
                                    targetText={customText}
                                    totalKeystrokes={totalKeystrokes}
                                    errorCount={errorCount}
                                    wrongWords={wrongWords}
                                    startTime={startTime}
                                    endTime={endTime}
                                    onRestart={handlePlayAgain}
                                />
                                <button
                                    onClick={handleChangeText}
                                    className="mt-4 text-gray-500 hover:text-white underline transition-colors">Change Custom Text</button>
                            </div>
                        ) : (
                            <div className="flex flex-col w-full max-w-5xl gap-6 relative">
                                <CountdownTimer count={countdown} />

                                <div className="flex gap-8 w-full justify-center pb-3">
                                    <p className="px-6 py-2 text-white text-3xl font-bold border-b-2 border-indigo-500">Custom Mode</p>
                                </div>

                                <div className="flex flex-col w-full gap-4">
                                    <TypingBoard
                                        words={customText}
                                        userInput={userInput}
                                        errorIndex={errorIndex}
                                    />

                                    <ProgressBar
                                        currentLength={userInput.length}
                                        totalLength={customText.length}
                                        playerName="Player 1"
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                )}

            </main>
        </div>
    );
};