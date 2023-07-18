import { InferActionsTypes, BaseThunkType } from '../redux-store'
import { TCurrency, TCurrencyData, TCurrencyDataSingle } from '../../types/types'
import { currencyApi } from '../../api/admin/currency-api'

const initialState = {
    currencies: {
        data: [] as TCurrency[]
    },
    currency: {} as TCurrencyDataSingle,
}

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType>

const bicycleReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'CURRENCY/GET_CURRENCIES':
            return {
                ...state,
                currencies: action.payload
            }
        case 'CURRENCY/GET_CURRENCY':
            return {
                ...state,
                currency: action.payload
            }
        default:
            return state
    }
}

export const actions = {
    getCurrencies: (currencies: TCurrencyData) => ({ type: 'CURRENCY/GET_CURRENCIES', payload: currencies } as const),
    getCurrency: (currency: TCurrencyDataSingle) => ({ type: 'CURRENCY/GET_CURRENCY', payload: currency } as const)
}

export const admin = {
    getCurrencies: (): ThunkType => async (dispatch) => {
        const currencies = await currencyApi.get()
        dispatch(actions.getCurrencies(currencies))
    },
    getCurrency: (currencyId: string): ThunkType => async (dispatch) => {
        const currency = await currencyApi.getById(currencyId)
        dispatch(actions.getCurrency(currency))
    },
    createCurrency: (body: TCurrency): ThunkType => async () => {
        await currencyApi.create(body)
    },
    updateCurrency: (currencyId: string, body: TCurrency): ThunkType => async () => {
        await currencyApi.update(currencyId, body)
    },
    deleteCurrency: (currencyId: string): ThunkType => async (dispatch) => {
        await currencyApi.delete(currencyId)
        const currencies = await currencyApi.get()
        dispatch(actions.getCurrencies(currencies))
    }
}

export default bicycleReducer