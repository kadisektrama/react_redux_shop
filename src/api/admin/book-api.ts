import lodash from 'lodash'

import { instance } from './api'
import { TBook, TBookData } from '../../types/types'
import { commonApi } from '../common/common-api'

export const bookApi = {
    getById(bookId: string) {
        return instance.get(`books/${bookId}`).then(res => res.data)
    },
    get() {
        return instance.get<TBookData>('books').then(res => res.data)
    },
    async create(body: TBook) {
        const dataForm = new FormData()

        for (let i = 0; i < body.images.fileList.length; i++) {
            dataForm.append('images', body.images.fileList[i].originFileObj)
        }

        const imagesUrls = await commonApi.uploadImage(dataForm)
        body.images = imagesUrls

        return instance.post('books', body)
    },
    async update(bookId: string, body: TBook) {
        if (!body.images) {
            body.images = null
            return instance.put(`users/${bookId}`, lodash.omit(body, ['__t', '__v', '_id']))
        }

        const dataForm = new FormData()
        const initialImages = []
        for (let i = 0; i < body.images.fileList.length; i++) {
            if (body.images.fileList[i].url) {
                initialImages.push({ url: body.images.fileList[i].url })
            } else {
                dataForm.append('images', body.images.fileList[i].originFileObj)
            }
        }

        const imagesUrls = await commonApi.uploadImage(dataForm)
        body.images = [ ...imagesUrls, ...initialImages ]

        return instance.put(`books/${bookId}`, lodash.omit(body, ['__t', '__v', '_id']))
    },
    delete(bookId: string) {
        return instance.delete(`books/${bookId}`)
    },
}