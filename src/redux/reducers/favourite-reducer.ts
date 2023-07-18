import { InferActionsTypes, BaseThunkType } from '../redux-store'
import {
    TFavourite,
    TFavouriteData,
    TFavouriteDataSingle
} from '../../types/types'
import { favouriteApi } from '../../api/guest/favourite-api'

const initialState = {
    favourites: {
        data: [] as TFavourite[]
    },
    favourite: {} as TFavouriteDataSingle,
}

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType>

const favouriteReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'FAVOURITE/GET_FAVOURITES':
            return {
                ...state,
                favourites: action.payload
            }
        case 'FAVOURITE/GET_FAVOURITE':
            return {
                ...state,
                favourite: action.payload
            }
        default:
            return state
    }
}

export const actions = {
    getFavourites: (favourites: TFavouriteData) => ({ type: 'FAVOURITE/GET_FAVOURITES', payload: favourites } as const),
    getFavourite: (favourite: TFavouriteDataSingle) => ({ type: 'FAVOURITE/GET_FAVOURITE', payload: favourite } as const)
}

export const guest = {
    getFavourites: (): ThunkType => async (dispatch) => {
        const favourites = await favouriteApi.get()
        dispatch(actions.getFavourites(favourites))
    },
    createFavourite: (product_id: string): ThunkType => async (dispatch) => {
        console.log('create')
        await favouriteApi.create(product_id)
        const favourites = await favouriteApi.get()
        dispatch(actions.getFavourites(favourites))
    },
    deleteFavourite: (product_id: string): ThunkType => async (dispatch) => {
        console.log('delete')
        await favouriteApi.delete(product_id)
        const favourites = await favouriteApi.get()
        dispatch(actions.getFavourites(favourites))
    }
}

export default favouriteReducer