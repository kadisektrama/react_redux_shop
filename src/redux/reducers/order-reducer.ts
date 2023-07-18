import { InferActionsTypes, BaseThunkType } from '../redux-store'
import { TOrderDataSingle, TOrder, TOrderData } from '../../types/types'
import { orderApi as hostOrderApi } from '../../api/host/order-api'
import { orderApi as guestOrderApi } from '../../api/guest/order-api'
import { orderApi as adminOrderApi } from '../../api/admin/order-api'

const initialState = {
    orders: {
        data: [] as TOrder[]
    },
    order: {} as TOrderDataSingle,
}

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType>

const bookReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'ORDER/GET_ORDERS':
            return {
                ...state,
                orders: action.payload
            }
        case 'ORDER/GET_ORDER':
            return {
                ...state,
                order: action.payload
            }
        default:
            return state
    }
}

export const actions = {
    getOrders: (orders: TOrderData) => ({ type: 'ORDER/GET_ORDERS', payload: orders } as const),
    getOrder: (order: TOrderDataSingle) => ({ type: 'ORDER/GET_ORDER', payload: order } as const)
}

export const admin = {
    getOrders: (): ThunkType => async (dispatch) => {
        const orders = await adminOrderApi.get()
        dispatch(actions.getOrders(orders))
    },
    getOrder: (orderId: string): ThunkType => async (dispatch) => {
        const order = await adminOrderApi.getById(orderId)
        dispatch(actions.getOrder(order))
    },
    createOrder: (body: TOrder): ThunkType => async () => {
        await adminOrderApi.create(body)
    },
    updateOrder: (orderId: string, body: TOrder): ThunkType => async () => {
        await adminOrderApi.update(orderId, body)
    },
    deleteOrder: (orderId: string): ThunkType => async (dispatch) => {
        await adminOrderApi.delete(orderId)
        const orders = await adminOrderApi.get()
        dispatch(actions.getOrders(orders))
    }
}

export const host = {
    getOrders: (): ThunkType => async (dispatch) => {
        const orders = await hostOrderApi.get()
        dispatch(actions.getOrders(orders))
    }
}

export const guest = {
    getOrders: (): ThunkType => async (dispatch) => {
        const orders = await guestOrderApi.get()
        dispatch(actions.getOrders(orders))
    },
    createOrder: (product_id: string): ThunkType => async () => {
        console.log(product_id)

        await guestOrderApi.create(product_id)
    }
}

export default bookReducer