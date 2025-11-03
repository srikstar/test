import axios from 'axios'
import { EXPRESS_URL_PATH } from './config'

const api = axios.create({
        EXPRESS_URL_PATH
    })

export const signinapi = async (values) => {
    const response = await api.post('/api/auth/signin', values)
    return response.data
}

export const signupapi = async (values) => {
    const response = await api.post('/api/auth/signup', values)
    return response.data
}