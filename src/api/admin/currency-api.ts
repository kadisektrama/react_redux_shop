import { instance } from './api'
import { TCurrency } from '../../types/types'

export const currencyApi = {
    get() {
        return instance.get('/currencies').then(res => res.data)
    },
    getById(currencyId: string) {
        return instance.get(`/currencies/${currencyId}`).then(res => res.data)
    },
    create(body: TCurrency) {
        return instance.post(`/currencies`, body)
    },
    update(currencyId: string, body: TCurrency) {
        return instance.put(`/currencies/${currencyId}`, body)
    },
    delete(currencyId: string) {
        return instance.delete(`/currencies/${currencyId}`)
    }
}