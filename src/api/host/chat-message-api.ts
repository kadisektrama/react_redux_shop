import lodash from 'lodash'

import { instance } from './api'
import { TOrderData } from '../../types/types'

export const chatMessageApi = {
    createMessage(body: any) {
        return instance.post('orders', body)
    },
}


/*
const body = {
    guest_uid: req.data.userId,
    host_uid: req.body.host_uid,
    message: req.body.message,
}*/
