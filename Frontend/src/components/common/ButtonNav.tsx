import { Link } from "react-router-dom"

export const UserProfile = ({ isOpen, onToggle, onLogout }: any) => (
    <>
        <div className="flex flex-row items-center gap-4 group cursor-pointer" onClick={onToggle}>
            <div className="flex rounded-full bg-indigo-500 p-0.5 ring-2 ring-transparent group-hover:ring-indigo-400 transition-all">
                <img className="size-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User" />
            </div>
            <span className="text-xl font-semibold text-white hidden md:block">Slowly612</span>
        </div>
        {isOpen && (
            <div className="absolute right-0 z-10 mt-3 w-56 origin-top-right rounded-xl bg-white py-2 shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none overflow-hidden">
                <Link to="/profile" onClick={onToggle} className="block px-4 py-3 text-lg text-gray-700 hover:bg-gray-100 font-medium">Your Profile</Link>
                <hr className="border-gray-100" />
                <button onClick={onLogout} className="block w-full text-left px-4 py-3 text-lg text-red-600 hover:bg-red-50 font-bold">Sign out</button>
            </div>
        )}
    </>
);

export const SignInButton = ({ Click }: any) => (
    <button onClick={Click} className="flex items-center gap-2 text-white text-xl font-bold hover:text-indigo-400 transition-colors uppercase tracking-wider">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="size-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12" />
        </svg>
        SIGN IN
    </button>
);