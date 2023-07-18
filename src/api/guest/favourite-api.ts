import { instance } from './api'
import { TFavouriteData } from '../../types/types'

export const favouriteApi = {
    get() {
        return instance.get<TFavouriteData>('favourites').then(res => res.data)
    },
    create(product_id: string) {
        return instance.post('favourites', { product_id: product_id })
    },
    delete(product_id: string) {
        return instance.delete(`favourites/${product_id}`)
    },
}