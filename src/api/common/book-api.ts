import { instance } from './api'
import { TBookData } from '../../types/types'

export const bookApi = {
    getById(bookId: string) {
        return instance.get(`books/${bookId}`).then(res => res.data)
    },
}