import lodash from 'lodash'

import { instance } from './api'

type TBody = {
    host_uid: string,
    message: string,
}

export const chatMessageApi = {
    createMessage(body: TBody) {
        return instance.post('messages/send', body)
    }
}

