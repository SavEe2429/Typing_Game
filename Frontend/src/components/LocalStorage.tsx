export const Localfile = () => {
    const token = localStorage.getItem('accessToken');
    const username = localStorage.getItem('userName')
    const role = localStorage.getItem('Role')

    return {
        token,
        username,
        role
    }
}