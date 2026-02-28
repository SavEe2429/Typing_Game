export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-[#1A1A1C] py-8 mt-auto">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">

                    {/* ส่วน Brand / Logo */}
                    <div className="flex flex-col items-center md:items-start">
                        <span className="text-xl font-black text-white italic tracking-tighter">
                            TYPING GAME
                        </span>
                        <p className="text-gray-500 text-sm mt-1">
                            ฝึกทักษะการพิมพ์ให้รวดเร็วและแม่นยำ
                        </p>
                    </div>



                    {/* ส่วน Copyright */}
                    <div className="text-gray-500 text-sm text-center md:text-right">
                        <p>© {currentYear} Jakkapan. All rights reserved.</p>
                        <p className="text-xs mt-1 text-gray-600">Built with React & Tailwind CSS</p>
                    </div>

                </div>
            </div>
        </footer>
    );
};