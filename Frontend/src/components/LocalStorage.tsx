export const Localfile = () => {
    const token = localStorage.getItem('accessToken')
    const email = localStorage.getItem('email')
    const username = localStorage.getItem('userName')
    const role = localStorage.getItem('Role')

    return {
        token,
        email,
        username,
        role
    }
}