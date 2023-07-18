import { instance } from './api'
import { TChatData } from '../../types/types'

export const chatApi = {
    get() {
        return instance.get<TChatData>('chats').then(res => res.data)
    },
}