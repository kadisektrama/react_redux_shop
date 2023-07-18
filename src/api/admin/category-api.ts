import lodash from 'lodash'

import { instance } from './api'
import { TCategoryData, TCategory } from '../../types/types'

export const categoryApi = {
    getById(categoryId: string): Promise<any> { // TODO
        return instance.get(`categories/${categoryId}`).then(res => res.data)
    },
    get() {
        return instance.get<TCategoryData>(`categories`).then(res => res.data)
    },
    create(body: TCategory): Promise<any> {
        return instance.post(`categories`, body)
    },
    update(categoryId: string, body: TCategory): Promise<any> {
        return instance.put(`categories/${categoryId}`, lodash.omit(body, ['__v', '_id']))
    },
    delete(categoryId: string): Promise<any> {
        return instance.delete(`categories/${categoryId}`)
    }
}