import { useEffect, useState } from 'react';
import axios from 'axios';

// กำหนดหน้าตาข้อมูลที่ได้จาก Database
export interface TrackedWord {
    _id: string;
    text: string;
}

export const useWordList = () => {
    const [Wordlist, setWordlist] = useState<TrackedWord[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchWords = async () => {
        try {
            const res = await axios.get('http://localhost:5000/api/track/all');

            console.log("WordList:", res.data);
            
            if (Array.isArray(res.data)) {
                setWordlist(res.data);
            } else {
                setWordlist([]);
            }
        } catch (err) {
            console.error("Failed to fetch database words:", err);
            setWordlist([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => { 
        fetchWords(); 
    }, []);

    return { Wordlist, setWordlist, loading };
};