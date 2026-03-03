import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { registerSchema, type RegisterForm } from "../schemas";
import { api } from "../api/axios";


export const useEdit = (user: any , onClose : () => void , onRefresh : () => void)  => {
    const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<RegisterForm>({
        resolver: zodResolver(registerSchema), defaultValues: { ...user, confirmPassword: user?.password } // ใส่ข้อมูลเก่าลงในฟอร์มอัตโนมัติ
    });

    useEffect(() => {
        if (user) {
            reset({ ...user, confirmPassword: user?.password });
        }
    }, [user, reset])

    const onSubmit = async (data: RegisterForm) => {
        try {
            const {confirmPassword , ...updataData} = data;
            console.log("Validatad Data : ", updataData);
            await api.patch('/users/edit', updataData);
            onClose()
            reset()
            onRefresh?.();
        } catch (err: any) {
            console.error("Updata Error: ", err);
            alert(err.response?.data?.message || "Update Fail");
        }
    }

    const handleDelete = async () => {
        if (window.confirm(`คุณแน่ใจหรือไม่ที่จะลบผู้เล่น ${user.email}?`)) {
            try {
                await api.delete(`/users/${user.email}`);
                onClose();
                onRefresh?.();
            } catch (err: any) {
                alert("ลบไม่สำเร็จ");
            }
        }
    }
    return {onSubmit , handleDelete , errors , isSubmitting , register ,handleSubmit}
}