import { InferActionsTypes, BaseThunkType } from '../redux-store'
import { TRole, TRoleDataSingle, TRoleData } from '../../types/types'
import { roleApi } from '../../api/admin/role-api'

const initialState = {
    roles: {
        data: [] as TRole[]
    },
    role: {} as TRoleDataSingle,
}

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType>

const bookReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'ROLE/GET_ROLES':
            return {
                ...state,
                roles: action.payload
            }
        case 'ROLE/GET_ROLE':
            return {
                ...state,
                role: action.payload
            }
        default:
            return state
    }
}

export const actions = {
    getRoles: (roles: TRoleData) => ({ type: 'ROLE/GET_ROLES', payload: roles } as const),
    getRole: (role: TRoleDataSingle) => ({ type: 'ROLE/GET_ROLE', payload: role } as const)
}

export const admin = {
    getRoles: (): ThunkType => async (dispatch) => {
        const roles = await roleApi.get()
        dispatch(actions.getRoles(roles))
    }
}

export default bookReducer