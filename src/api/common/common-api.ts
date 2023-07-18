import { instance } from './api'

export const commonApi = {
    identify() {
        return instance.get('/identify').then(res => res.data)
    },
    uploadImage(body: any) {
        console.log('uploadImage', body)
        return instance.post('/upload', body,
            {
                headers: {
                    "Contest-type": "multipart/form-data"
                }
            }).then(res => res.data.data)
    }
}