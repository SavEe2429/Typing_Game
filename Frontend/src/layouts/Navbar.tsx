import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { set } from "zod";

export const Navbar = () => {
    const [isTelMenuOpen, setIsTelMenuOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isLogin, setIsLogin] = useState(false); // เก็บไว้ใช้ภายหลัง
    const location = useLocation();

    const isActive = (path: string) => location.pathname === path;

    const navItems = [
        { name: 'Play', path: '/' },
        { name: 'Ranking', path: '/ranking' }
    ]

    return (
        <nav className="relative bg-[#1A1A1C] ">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                {/* เพิ่มความสูงแถวเป็น h-20 หรือ h-24 เพื่อให้รับกับฟอนต์ที่ใหญ่ขึ้น */}
                <div className="relative flex h-24 items-center justify-between">

                    {/* Mobile Button - วางชิดซ้าย (ย้ายจาก right-0 มา left-0) */}
                    <div className="flex absolute inset-y-0 left-0 items-center pl-2 sm:hidden">
                        <button onClick={() => setIsTelMenuOpen(!isTelMenuOpen)}
                            className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-none">
                            <svg className={`${isTelMenuOpen ? 'hidden' : 'block'} size-8`} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5 M3.75 12h16.5 m-16.5 5.25h16.5" />
                            </svg>
                            <svg className={`${isTelMenuOpen ? 'block' : 'hidden'} size-8`} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex shrink-0 items-center">
                            {/* 1. ขยายชื่อเกมเป็น text-2xl หรือ text-3xl */}
                            <span className="ml-2 text-2xl md:text-3xl font-black text-white tracking-tighter italic">TYPING GAME</span>
                        </div>
                        <div className="hidden sm:ml-10 sm:block">
                            <div className="flex space-x-6">
                                {navItems.map((item, index: number) => (
                                    <Link
                                        key={index}
                                        to={item.path}
                                        // 2. ขยายฟอนต์เมนูเป็น text-lg หรือ text-xl
                                        className={`rounded-md px-4 py-2 text-xl font-bold transition-all ${isActive(item.path) ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/20' : 'text-gray-300 hover:text-white hover:bg-white/10'
                                            }`}>
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <div className="relative ml-3">

                            {isLogin ? (
                                // === กรณีที่ล็อกอินแล้ว: แสดงรูปโปรไฟล์และชื่อ ===
                                <>
                                    <div className="flex flex-row items-center justify-center gap-4 group cursor-pointer" onClick={() => setIsProfileOpen(!isProfileOpen)}>
                                        <div className="flex rounded-full bg-indigo-500 p-0.5 ring-2 ring-transparent group-hover:ring-indigo-400 transition-all">
                                            <img className="size-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User" />
                                        </div>
                                        <span className="text-xl font-semibold text-white hidden md:block">Slowly612</span>
                                    </div>

                                    {/* Dropdown Menu */}
                                    {isProfileOpen && (
                                        <div className="absolute right-0 z-10 mt-3 w-56 origin-top-right rounded-xl bg-white py-2 shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none overflow-hidden">
                                            <Link to="/profile" className="block px-4 py-3 text-lg text-gray-700 hover:bg-gray-100 font-medium">Your Profile</Link>
                                            <hr className="border-gray-100" />
                                            <button onClick={() => setIsLogin(false)} className="block w-full text-left px-4 py-3 text-lg text-red-600 hover:bg-red-50 font-bold">Sign out</button>
                                        </div>
                                    )}
                                </>
                            ) : (
                                <button onClick={() => setIsLogin(true)} className="flex items-center gap-2 text-white text-xl font-bold hover:text-indigo-400 transition-colors uppercase tracking-wider">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="size-7">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12" />
                                    </svg>
                                    SIGN IN
                                </button>
                                
                            )}

                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile menu - ขยายฟอนต์ให้กดยืนยันง่ายๆ */}
            {isTelMenuOpen && (
                <div className="sm:hidden px-4 pt-2 pb-6 space-y-2 bg-[#252527] border-t border-white/5">
                    {navItems.map((item, index: number) =>
                        <Link
                            key={index}
                            to={item.path}
                            onClick={() => setIsTelMenuOpen(false)}
                            className={`block rounded-lg px-4 py-4 text-2xl font-bold transition-all ${isActive(item.path) ? 'bg-indigo-600 text-white' : 'text-gray-300 hover:bg-white/5'}`}>
                            {item.name}
                        </Link>
                    )}
                </div>
            )}
        </nav>
    )
}