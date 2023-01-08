import axios from "./axios"

export const dataRank = async () => {
    try {
        const response = await axios.get('/rank')
        return response.data
    } catch (error) {
        return { success: 'false', message: error.message }
    }
}

export const result = async (id) => {
    try {
        const response = await axios.get(`/rank/${id}`)
        return response.data
    } catch (error) {
        return { success: 'false', message: error.message }
    }
}