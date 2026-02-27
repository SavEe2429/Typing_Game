const UserTyping = ({ 
    targetText, 
    userInput }: {
      targetText: string;
      userInput: string;
    }) => {
  const characters = targetText.split('');

  return (
    <div className="text-2xl font-mono leading-relaxed select-none">
      {characters.map((char, index) => {
        let colorInput = 'text-gray-400'; //เมื่อยังไม่ได้พิมพ์

        if (index < userInput.length) {
          const isCorrect = char === userInput[index];
          colorInput = isCorrect ? 'text-indigo-400' : 'text-red-300';
        }

        const isCurrentInput = index === userInput.length;

        return (
          <span
            key={index}
            className={`${colorInput} ${
              isCurrentInput ? 'border-l-2 border-indigo-400' : ''
            }`}>{char}</span>
        );
      })}
    </div>
  );
};

export default UserTyping;