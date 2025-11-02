import axios from 'axios'
import {API_BASE_URL} from './config.js'

const api = axios.create({
    baseURL : API_BASE_URL, 
})

export const signup = async(values) => {
    try {
        const response = await api.post('/api/auth/signup', values)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const signin = async(values) => {
    try {
        const response = await api.post('/api/auth/signin', values)
        return response
    } catch (error) {
        console.log(error)
    }
}