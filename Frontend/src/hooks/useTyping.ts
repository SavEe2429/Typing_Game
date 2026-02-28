import { useState, useEffect, useCallback } from 'react'

export const useTyping = (targetText: string) => {
  const [userInput, setUserInput] = useState<string>('')

  // state เอาไว้สำหรับเก็บจำนวนครั้งที่กดคีย์บอร์ด เพื่อคำนวน mistake
  const [totalKeystrokes, setTotalKeystrokes] = useState(0)
  const [errorCount, setErrorCount] = useState(0)
  const [errorIndex, setErrorIndex] = useState<number | null>(null);
  const [wrongWords, setWrongWords] = useState<number[]>([]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {

    if (!targetText) return

    //ป้องกันการเลื่อนหน้าจอเมื่อกด Spacebar
    if (e.key === ' ') {
      e.preventDefault()
    }

    if (e.key.length === 1) {
      if (userInput.length < targetText.length) {
        const expectedChar = targetText[userInput.length]

        setTotalKeystrokes((prev) => prev + 1)

        //ถ้าพิมพ์ถูกจะไปต่อ แต่ถ้าพิมพ์ตัวอักษรนั้นผิดก็จะไม่ให้ไปต่อ
        if (e.key === expectedChar) {
          setUserInput((prev) => prev + e.key)
          setErrorIndex(null);
        } else {
          setErrorCount((prev) => prev + 1) //นับจำนวนครั้งที่กดตัวอักษรผิด
          setErrorIndex(userInput.length); //ระบุตำแหน่งที่ผิด

          //เก็บ index คำที่ผิดไปโชว์ที่ matchview
          const currentWordIndex = userInput.split(' ').length - 1;

          // ป้องกันการเก็บค่าเดิมซ้ำ ๆ
          if (!wrongWords.includes(currentWordIndex)) {
            setWrongWords(prev => [...prev, currentWordIndex]);
          }
        }

      }
    }
  }, [targetText, userInput.length]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown])

  const resetTyping = useCallback(() => {
    setUserInput("");
    setTotalKeystrokes(0);
    setErrorCount(0);
    setErrorIndex(null);
    setWrongWords([]);
  }, []);

  return {
    userInput,
    totalKeystrokes,
    errorCount,
    errorIndex,
    wrongWords,
    resetTyping
  }
};