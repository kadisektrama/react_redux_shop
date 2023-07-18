import { instance } from './api'

export const roleApi = {
    get() {
        return instance.get('/roles').then(res => res.data)
    }
}