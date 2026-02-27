export const CountdownOverlay = ({ count }: { count: number;}) => {
    // ถ้าเวลานับถอยหลังหมดแล้ว (เป็น 0) ก็ไม่ต้องแสดงผล Component นี้
    if (count <= 0) return null;

    return (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-[#1A1A1C]/80 backdrop-blur-sm">
            <h1 className="text-9xl font-black text-indigo-500 animate-pulse">
                {count}
            </h1>
        </div>
    );
};