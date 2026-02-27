export const formatTime = (totalSeconds: number): string => {
    //หาจำนวนนาที
    const minutes = Math.floor(totalSeconds / 60);
    
    //หาเศษวินาทีที่เหลือ
    const seconds = Math.floor(totalSeconds % 60);

    return `${minutes}:${seconds}`;
};