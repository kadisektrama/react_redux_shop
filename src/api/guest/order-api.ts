import lodash from 'lodash'

import { instance } from './api'
import { TOrder, TOrderData } from '../../types/types'

export const orderApi = {
    get() {
        return instance.get<TOrderData>('orders').then(res => res.data)
    },
    create(product_id: string) {
        return instance.post('orders', { product_id: product_id })
    },
}