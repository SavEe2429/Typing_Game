import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { wordSchema, type WordForm } from "../schemas";
import { api } from "../api/axios";

export const useAddWord = () => {
    const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<WordForm>({
        resolver: zodResolver(wordSchema)
    });

    const onSubmit = async (data: WordForm) => {
        try {
            await api.post('/track/add', { text: data.text });

            alert(`Add Words Successfully`);
            console.log("Add Words: ", data.text)
            reset();
        } catch (err: any) {
            const message = "Add Words Failed";
            alert(message);
        }
    }

    return {
        register,
        handleSubmit,
        onSubmit,
        errors,
        isSubmitting
    };
};