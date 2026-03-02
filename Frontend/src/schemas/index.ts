import { z } from 'zod'

// login and register schema

export const loginSchema = z.object({
    email: z.email('อีเมลหรือรหัสผ่านไม่ถูกต้อง'),
    password: z.string().min(6, 'อีเมลหรือรหัสผ่านไม่ถูกต้อง')
});

export const registerSchema = loginSchema.extend({
    username: z.string().min(1, 'ตั้งชื่ออย่างน้อย 1 ตัว'),
    confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
    message: "รหัสผ่านไม่ถูกต้อง",
    path: ["confirmPassword"],
});

// game schemas
export const gameSchema = z.object({
    wpm: z.number(),
    accuracy: z.number().min(0).max(100),
    characters: z.number(),
    errors: z.number(),
    timeSeconds: z.number(),
});

export const wordSchema = z.object({
    text: z.string().min(1, "Please put some word")
})

export type LoginForm = z.infer<typeof loginSchema>
export type RegisterForm = z.infer<typeof registerSchema>
export type GameVar = z.infer<typeof gameSchema>
export type WordForm = z.infer<typeof wordSchema>;

