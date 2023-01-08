import axios from "./axios"

export const createDocument = async (document) => {
    try {
        const response = await axios.post('/create', document)
        return response.data
    } catch (error) {
        return { success: 'false', message: error.message }
    }
}