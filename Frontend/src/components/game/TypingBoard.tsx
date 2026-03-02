import UserTyping from "./UserTyping";

export const TypingBoard = ({
    words,
    userInput,
    errorIndex }: {
        words: string;
        userInput: string;
        errorIndex: number | null;
    }) => {
    return (

        <div className="w-full max-w-5xl mx-auto bg-[#252527] backdrop-blur-sm p-6 sm:p-10 rounded-2xl shadow-1xl border border-gray-700/50 mb-6">

            <div className="text-xl sm:text-2xl font-mono leading-relaxed tracking-wide relative">
                <UserTyping
                    targetWord={words}
                    userInput={userInput}
                    errorIndex={errorIndex}
                />
            </div>

        </div>
    )
}