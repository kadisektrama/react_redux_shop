import { InferActionsTypes, BaseThunkType } from '../redux-store'
import { TBicycle, TBicycleData, TBicycleDataSingle } from '@typess/types'
import { bicycleApi as adminBicycleApi } from '../../api/admin/bicycle-api'
import { bicycleApi as commonBicycleApi } from '../../api/common/bicycle-api'

const initialState = {
    bicycles: {
        data: [] as TBicycle[]
    },
    bicycle: {} as TBicycleDataSingle,
}

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType>

const bicycleReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'BICYCLE/GET_BICYCLES':
            return {
                ...state,
                bicycles: action.payload
            }
        case 'BICYCLE/GET_BICYCLE':
            return {
                ...state,
                bicycle: action.payload
            }
        default:
            return state
    }
}

export const actions = {
    getBicycles: (bicycles: TBicycleData) => ({ type: 'BICYCLE/GET_BICYCLES', payload: bicycles } as const),
    getBicycle: (bicycle: TBicycleDataSingle) => ({ type: 'BICYCLE/GET_BICYCLE', payload: bicycle } as const)
}

export const admin = {
    getBicycles: (): ThunkType => async (dispatch) => {
        const bicycles = await adminBicycleApi.get()
        dispatch(actions.getBicycles(bicycles))
    },
    getBicycle: (bicycleId: string): ThunkType => async (dispatch) => {
        const bicycle = await adminBicycleApi.getById(bicycleId)
        dispatch(actions.getBicycle(bicycle))
    },
    createBicycle: (body: TBicycle): ThunkType => async () => {
        await adminBicycleApi.create(body)
    },
    updateBicycle: (bicycleId: string, body: TBicycle): ThunkType => async () => {
        await adminBicycleApi.update(bicycleId, body)
    },
    deleteBicycle: (bicycleId: string): ThunkType => async (dispatch) => {
        await adminBicycleApi.delete(bicycleId)
        const bicycles = await adminBicycleApi.get()
        dispatch(actions.getBicycles(bicycles))
    }
}

export const common = {
    getBicycle: (bicycleId: string): ThunkType => async (dispatch) => {
        const bicycle = await commonBicycleApi.getById(bicycleId)
        dispatch(actions.getBicycle(bicycle))
    },
}

export default bicycleReducer