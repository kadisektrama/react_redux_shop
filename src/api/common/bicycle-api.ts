import { instance } from './api'

export const bicycleApi = {
    getById(bicycleId: string) {
        return instance.get(`/bicycles/${bicycleId}`).then(res => res.data)
    },
}