const UserTyping = ({
  targetWord,
  userInput,
  errorIndex
}: {
  targetWord: string;
  userInput: string;
  errorIndex?: number | null;
}) => {

  const words = targetWord.split("");

  return (
    <div className="text-2xl font-mono leading-relaxed select-none">
      {words.map((char, index) => {

        let colorInput = "text-gray-400";

        if (index < userInput.length) {
          const isCorrect = char === userInput[index];
          colorInput = isCorrect
            ? "text-indigo-400"
            : "text-red-300";
        }

        const isCurrentInput = index === userInput.length;

        if (isCurrentInput && index === errorIndex) {
          colorInput = "text-red-300";
        }

        return (
          <span
            key={index}
            className={`${colorInput} ${
              isCurrentInput
                ? "border-l-2 border-indigo-400"
                : ""
            }`}
          >
            {char}
          </span>
        );
      })}
    </div>
  );
};

export default UserTyping;