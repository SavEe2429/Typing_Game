import { useAddWord } from "../../hooks/useAddWord";


export const AddWord = ({ setWordlist }: { setWordlist: any }) => {
  const { register, handleSubmit, onSubmit, errors, isSubmitting } = useAddWord(setWordlist);

  return (
    <div className="flex flex-col w-full">
      <main className="flex flex-col w-full flex-grow bg-[#252527] items-center p-5 pt-0">
        <div className="flex gap-8 w-full justify-center pb-3 pt-3">
          <h1 className="px-6 py-2 text-white text-3xl font-bold">Add Word</h1>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="w-full">

          <textarea
            {...register('word')}
            disabled={isSubmitting}
            className={`w-full h-48 bg-[#1A1A1C] text-gray-300 border ${errors.word ? 'border-red-500' : 'border-gray-700'} rounded-xl p-4 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 font-mono resize-none transition-all`}
            placeholder="e.g. keyboard, mouse, headphone..."
          />

          <div className="min-h-[24px] mt-2 mb-2">
            {errors.word && <p className="text-red-400 text-sm font-bold">* {errors.word.message}</p>}
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-8 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-2xl transition-all active:scale-95 shadow-lg shadow-indigo-500/20 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Adding..." : "Add Word"}
            </button>
          </div>

        </form>
      </main >
    </div>
  );
};