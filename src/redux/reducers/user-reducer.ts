import { BaseThunkType, InferActionsTypes } from '../redux-store'
import { TUser, TUserData, TUserDataSingle } from '@typess/types'
import { userApi as adminUserApi } from '../../api/admin/user-api'
import { userApi as commonUserApi } from '../../api/common/user-api'
import { commonApi } from '../../api/common/common-api'

const initialState = {
    users: {
        data: [] as TUser[]
    },
    user: {} as TUserDataSingle
}

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType>

const userReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'APP/GET_USERS':
            return {
                ...state,
                users: action.payload
            }
        case 'APP/GET_USER':
            return {
                ...state,
                user: action.payload
            }
        default:
            return state
    }
}

export const actions = {
    getUsers: (users: TUserData) => ({ type: 'APP/GET_USERS', payload: users } as const),
    getUser: (user: TUserDataSingle) => ({ type: 'APP/GET_USER', payload: user } as const)
}

export const common = {
    identify: (): ThunkType => async (dispatch) => {
        const user = await commonApi.identify()
        dispatch(actions.getUser(user))
    },
    getUsers: (): ThunkType => async (dispatch) => {
        const users = await commonUserApi.get()
        dispatch(actions.getUsers(users))
    },
}

export const admin = {
    getUsers: (): ThunkType => async (dispatch) => {
        const users = await adminUserApi.get()
        dispatch(actions.getUsers(users))
    },
    getUser: (userId: string): ThunkType => async (dispatch) => {
        const user = await adminUserApi.getById(userId)
        dispatch(actions.getUser(user))
    },
    createUser: (body: TUser): ThunkType => async(dispatch) => {
        await adminUserApi.create(body)
    },
    updateUser: (userId: string, body: TUser): ThunkType => async (dispatch) => {
        const users = await adminUserApi.update(userId, body)
        dispatch(actions.getUsers(users))
    },
    deleteUser: (userId: string): ThunkType => async (dispatch) => {
        await adminUserApi.delete(userId)
        const users = await adminUserApi.get()
        dispatch(actions.getUsers(users))
    }
}

export default userReducer