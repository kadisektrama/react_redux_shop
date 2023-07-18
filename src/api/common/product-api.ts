import { instance } from './api'
import { TProductData } from '../../types/types'

export const productApi = {
    get(body: any = {}) {
        return instance.get<TProductData>(`products?${new URLSearchParams(body as any).toString()}`).then(res => res.data)
    },
}