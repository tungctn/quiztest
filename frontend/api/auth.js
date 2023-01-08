import axios from "./axios"

const responseError = (error) => {
    return { success: 'false', message: error.message }
}

export const setAuthHeader = (token) => {
    if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    } else {
        delete axios.defaults.headers.common['Authorization']
    }
}

export const loginAPI = async (loginForm) => {
    try {
        const response = await axios.post('/login', loginForm)
        return response.data
    } catch (error) {
        responseError(error)
    }
}

export const logoutAPI = async () => {
    try {
        const response = await axios.get('/logout')
        return response.data
    } catch (error) {
        responseError(error)
    }
}

export const getCurrentUser = async () => {
    try {
        const response = await axios.get('/profile')
        return response.data
    } catch (error) {
        responseError(error)
    }
}