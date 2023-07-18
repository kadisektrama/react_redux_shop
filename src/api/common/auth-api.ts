import { instance } from './api'
import { TLogin, TRegistration } from '../../types/types'

export const authApi = {
    authenticate(body: TLogin) {
        return instance.post('/auth/authenticate', body)
    },
    register(body: TRegistration) {
        return instance.post(`/auth/register`, body)
    },
}