import { Mail, Lock ,UserRound} from "lucide-react";
import { Link } from "react-router-dom";
import { AuthDivider, AuthInput, GoogleLogin } from "../components/common/form";


export const RegisterPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-12rem)] p-4 sm:p-6">
      <div className="w-full max-w-[450px] bg-[#252527] rounded-3xl p-6 sm:p-10 shadow-2xl border border-white/5">
        
        <h1 className="text-3xl sm:text-4xl font-black text-white mb-8 tracking-tight text-center sm:text-left">
          Login
        </h1>

        <GoogleLogin />
        <AuthDivider />

        <div className="space-y-4">
          <AuthInput icon={Mail} type="email" placeholder="Email Address" />
          <AuthInput icon={Lock} type="password" placeholder="Password" />
          {/* <AuthInput icon={UserRound} type="" */}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between mt-8 gap-4 sm:gap-0">
          <Link to='/auth/forgetpass' className="text-gray-500 hover:text-white text-xs sm:text-sm font-medium transition-colors">
            Forgot your password?
          </Link>
          <button className="w-full sm:w-auto bg-[#333] hover:bg-[#444] text-white px-8 py-3 rounded-xl font-bold uppercase tracking-wider transition-all border border-white/10 shadow-lg text-sm sm:text-base">
            Login
          </button>
        </div>
      </div>

      <p className="mt-8 text-gray-500 font-medium text-sm sm:text-base text-center">
        Don't have an account?{" "}
        <Link to="/auth/register" className="text-white hover:underline underline-offset-4 transition-all">
          Sign up
        </Link>
      </p>
    </div>
  );
};