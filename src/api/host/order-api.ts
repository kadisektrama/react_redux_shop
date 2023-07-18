import { instance } from './api'
import { TOrderData } from '../../types/types'

export const orderApi = {
    get() {
        return instance.get<TOrderData>('orders').then(res => res.data)
    },
}