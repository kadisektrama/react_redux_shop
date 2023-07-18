import { instance } from './api'
import { TBicycle } from '@typess/types'
import { commonApi } from '../common/common-api'
import lodash from 'lodash'

export const bicycleApi = {
    get() {
        return instance.get('/bicycles').then(res => res.data)
    },
    getById(bicycleId: string) {
        return instance.get(`/bicycles/${bicycleId}`).then(res => res.data)
    },
    async create(body: TBicycle) {
        const dataForm = new FormData()

        for (let i = 0; i < body.images.fileList.length; i++) {
            dataForm.append('images', body.images.fileList[i].originFileObj)
        }

        const imagesUrls = await commonApi.uploadImage(dataForm)
        body.images = imagesUrls

        return instance.post('/bicycles', body)
    },
    async update(bicycleId: string, body: TBicycle) {
        if (!body.images) {
            body.images = null
            return instance.put(`users/${bicycleId}`, lodash.omit(body, ['__t', '__v', '_id']))
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

        return instance.put(`/bicycles/${bicycleId}`, body)
    },
    delete(bicycleId: string) {
        return instance.delete(`/bicycles/${bicycleId}`)
    }
}