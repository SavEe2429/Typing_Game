import { useDeleteWord } from "../../hooks/useDeleteWord";
import { useWordList } from "../../hooks/useWordList";

export const WordList = () => {
    const { Wordlist, setWordlist, isLoading } = useWordList();
    const { deleteWord } = useDeleteWord(setWordlist);

    if (isLoading) {
        return (
            <div className="w-full flex justify-center py-20">
                <div className="text-indigo-400 animate-pulse font-bold tracking-widest">LOADING WORDS...</div>
            </div>
        );
    }

    return (
        <div className="flex flex-col w-full items-center animate-in fade-in duration-300">
            <div className="w-full p-6 md:p-8">

                <div className="flex justify-between items-end mb-8 border-b border-white/5 pb-4">
                    <div className="bg-indigo-500/10 text-indigo-400 px-4 py-1.5 rounded-full text-xs font-bold border border-indigo-500/20 shadow-inner">
                        {Wordlist.length} WORDS
                    </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 or gap-4">
                    {Wordlist.map((word) => (
                        <div
                            key={word._id}
                            className="group relative flex justify-center items-center bg-[#1A1A1C] p-3 rounded-xl border border-white/5 "
                        >
                            <span className="text-gray-300 font-medium truncate">
                                {word.word}
                            </span>

                            {/* DELETE BUTTON */}
                            <button
                                onClick={() => deleteWord(word._id)
                                }
                                className="absolute top-1/2 right-2 -translate-y-1/2 text-xs px-2 py-1  hover:bg-red-400 rounded-lg text-white">✕</button>
                        </div>
                    ))}
                </div>

                {Wordlist.length === 0 && (
                    <p className="text-gray-400 font-medium">No Words</p>
                )}

            </div>
        </div>
    );
};