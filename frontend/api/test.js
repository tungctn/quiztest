import axios from "./axios"

export const test = async () => {
    try {
        const response = await axios.get('/test')
        return response.data
    } catch (error) {
        return { success: 'false', message: error.message }
    }
}

export const point = async (data) => {
    try {
        const response = await axios.post('/point', data)
        return response.data
    } catch (error) {
        return { success: 'false', message: error.message }
    }
}