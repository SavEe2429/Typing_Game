export const Localfile = () => {
    const token = localStorage.getItem('accessToken')
    const email = localStorage.getItem('email')
    const username = localStorage.getItem('userName') || "Guest"; //หากไม่ได้ Login จะโชว์ Guest หน้า Progress
    const role = localStorage.getItem('Role')

    return {
        token,
        email,
        username,
        role
    }
}