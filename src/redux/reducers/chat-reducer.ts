import { InferActionsTypes, BaseThunkType } from '../redux-store'
import { TChatData, TChatDataSingle, TChat } from '../../types/types'
import { chatApi as guestBookApi } from '../../api/guest/chat-api'
import { chatApi as hostBookApi } from '../../api/host/chat-api'
import { chatMessageApi as guestChatMessageApi } from '../../api/guest/chat-message-api'

const initialState = {
    chats: {
        data: [] as TChat[]
    },
    chat: {} as TChatDataSingle,
}

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType>

const bookReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'CHAT/GET_CHATS':
            return {
                ...state,
                chats: action.payload
            }
        case 'CHAT/GET_CHAT':
            return {
                ...state,
                chat: action.payload
            }
        default:
            return state
    }
}

export const actions = {
    getChats: (chats: TChatData) => ({ type: 'CHAT/GET_CHATS', payload: chats } as const),
    getChat: (chat: TChatDataSingle) => ({ type: 'CHAT/GET_CHAT', payload: chat } as const)
}

export const guest = {
    getChats: (): ThunkType => async (dispatch) => {
        const book = await guestBookApi.get()
        dispatch(actions.getChats(book))
    },
    createMessage: (body: any): ThunkType => async () => {
        await guestChatMessageApi.createMessage(body)
    },
    getChat: (messages: any): ThunkType => async (dispatch) => {
        dispatch(actions.getChat(messages))
    },
}

export const host = {
    getChats: (): ThunkType => async (dispatch) => {
        const book = await hostBookApi.get()
        dispatch(actions.getChats(book))
    },
    createMessage: (body: any): ThunkType => async () => {
        await guestChatMessageApi.createMessage(body)
    },
}

export default bookReducer