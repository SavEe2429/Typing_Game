import { z } from 'zod'

// login and register schema

export const loginSchema = z.object({
    email: z.email('อีเมลหรือรหัสผ่านไม่ถูกต้อง'),
    password: z.string().min(6, 'อีเมลหรือรหัสผ่านไม่ถูกต้อง')
});

export const registerSchema = loginSchema.extend({
    username: z.string().min(1, 'ตั้งชื่ออย่างน้อย 1 ตัว'),
    password: z.string().min(6, 'รหัสผ่านต้องมีอย่างน้อย 6 ตัว')
        .regex(/[A-Z]/, "ต้องมีตัวพิมพ์ใหญ่อย่างน้อย 1 ตัว")
        .regex(/[a-z]/, "ต้องมีตัวพิมพ์เล็กอย่างน้อย 1 ตัว")
        .regex(/[0-9]/, "ต้องมีตัวเลขอย่างน้อย 1 ตัว")
        .regex(/[!@#$%^&*(),.?":{}|<>_]/, "ต้องมีตัวอักษรพิเศษอย่างน้อย 1 ตัว"),
    confirmPassword: z.string().min(1, "กรุณายืนยันรหัสผ่าน"),
    role: z.enum(["USER", "ADMIN"]).optional()
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
    word: z.string().min(1, "Please put some word")
})

export type LoginForm = z.infer<typeof loginSchema>
export type RegisterForm = z.infer<typeof registerSchema>
export type GameVar = z.infer<typeof gameSchema>
export type WordForm = z.infer<typeof wordSchema>;

