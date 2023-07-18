import lodash from 'lodash'

import { InferActionsTypes, BaseThunkType } from '../redux-store'
import { TProductData, TProduct } from '../../types/types'
import { productApi as adminProductApi } from '../../api/admin/product-api'
import { productApi as commonProductApi } from '../../api/common/product-api'

const initialState = {
    products: {
        data: [] as TProduct[]
    },
    product: null,
}

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType>

const productReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'PRODUCT/GET_PRODUCTS':
            return {
                ...state,
                products: action.payload
            }
        default:
            return state
    }
}

export const actions = {
    getProducts: (products: TProductData) => ({ type: 'PRODUCT/GET_PRODUCTS', payload: products } as const)
}

export const common = {
    getProducts: (body: any = {}): ThunkType => async (dispatch) => {
        let reqBody = body

        if (!lodash.isEmpty(body)) {
            reqBody = {
                ...body,
                'price[lte]': body['price[lte]'] * 1000,
                'price[gte]': body['price[gte]'] * 1000,
            }
        }

        const products = await commonProductApi.get(reqBody)
        dispatch(actions.getProducts(products))
    }
}

export const admin = {
    getProducts: (): ThunkType => async (dispatch) => {
        const products = await adminProductApi.get()
        dispatch(actions.getProducts(products))
    }
}

export default productReducer