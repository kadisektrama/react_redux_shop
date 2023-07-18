import { instance } from './api'
import { TUserData } from '../../types/types'

export const userApi = {
    get() {
        return instance.get<TUserData>(`users`).then(res => res.data)
    }
}