import { instance } from './api'
import { TOrder } from '../../types/types'

export const orderApi = {
    get() {
        return instance.get('/orders').then(res => res.data)
    },
    getById(orderId: string) {
        return instance.get(`/orders/${orderId}`).then(res => res.data)
    },
    create(body: TOrder) {
        return instance.post('/orders', body)
    },
    update(orderId: string, body: TOrder) {
        return instance.put(`/orders/${orderId}`, body)
    },
    delete(orderId: string) {
        return instance.delete(`/orders/${orderId}`)
    }
}