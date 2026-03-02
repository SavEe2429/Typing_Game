import { api } from "../api/axios"

export const savePerformanceData = async (
    userEmail: string,
    username: string,
    wpm: number,
    accuracy: number,
    duration: number,
    mode: string = 'quickplay'
) => {
    try {
        const payload = { userEmail, username, wpm, accuracy, duration, mode }

        const res = await api.post("/performance/save", payload)

        return res.data;
    } catch (err: any) {
        console.error("API error", err)
        throw err;
    }
}