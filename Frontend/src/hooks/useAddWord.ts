import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { wordSchema, type WordForm } from "../schemas/index"; // Import จากไฟล์ที่คุณเพิ่งโชว์
import { api } from "../api/axios";

export const useAddWord = (setWordlist: any) => {
    const {
        register,
        handleSubmit,
        reset,
        setError,
        formState: { errors, isSubmitting }
    } = useForm<WordForm>({
        resolver: zodResolver(wordSchema) 
    });

    const onSubmit = async (data: WordForm) => {
        try {
            const response = await api.post("/tracks/add", { word: data.word });
            
            // อัปเดตรายชื่อที่หน้าจอ (WordList)
            const newWord = response.data.data;
            setWordlist((prev: any[]) => [newWord, ...prev]);
            
            reset(); // ล้างช่อง Textarea
        } catch (err: any) {
            const serverError = err.response?.data?.error || "Add Word Failed";
            setError("word", { message: serverError });
        }
    };

    return { register, handleSubmit, onSubmit, errors, isSubmitting };
};