import lodash from 'lodash'

import { instance } from './api'
import { TCategoryData, TCategory } from '../../types/types'

export const categoryApi = {
    get() {
        return instance.get<TCategoryData>(`categories`).then(res => res.data)
    },
}