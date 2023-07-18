import lodash from 'lodash'

import { instance } from './api'
import { TUserData, TUser } from '@typess/types'
import { commonApi } from '../common/common-api'

export const userApi = {
    getById(userId: string): Promise<any> {
        return instance.get(`users/${userId}`).then(res => res.data)
    },
    get() {
        return instance.get<TUserData>(`users`).then(res => res.data)
    },
    async create(body: TUser): Promise<any> {
        const dataForm = new FormData()

        dataForm.append('images', body.image.file.originFileObj)

        const image = await commonApi.uploadImage(dataForm)
        body.image = image[0]

        return instance.post(`users`, body)
    },
    async update(userId: string, body: TUser): Promise<any> {
        if (!body.image) {
            body.image = null
            return instance.put(`users/${userId}`, lodash.omit(body, ['__t', '__v', '_id']))
        }

        const dataForm = new FormData()
        dataForm.append('images', body.image.fileList.at(0).originFileObj)
        const image = await commonApi.uploadImage(dataForm)
        body.image = image.at(0)

        return instance.put(`users/${userId}`, lodash.omit(body, ['__t', '__v', '_id']))
    },
    delete(userId: string) {
        return instance.delete(`users/${userId}`)
    }
}