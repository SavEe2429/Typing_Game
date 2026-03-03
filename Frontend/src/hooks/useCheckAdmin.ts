import { useEffect, useState } from "react"
import { api } from "../api/axios";
import { useNavigate } from "react-router-dom";

export const useCheckAdmin = () => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [isLoading , setIsLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const verifyAdmin = async () => {
            
            try {
                const res = await api.post('/dashboard');
                if (res.status === 200) setIsAdmin(true);
            } catch (err: any) {
                setIsAdmin(false);
                navigate('/404', { replace: true });
            }finally{
                setIsLoading(false);
            }
        }


        verifyAdmin();
    }, [navigate]);

    return {isAdmin , isLoading}
}