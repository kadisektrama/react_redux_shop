import { BaseThunkType, InferActionsTypes } from '../redux-store'
import { TCategory, TCategoryData, TCategoryDataSingle } from '../../types/types'
import { categoryApi as adminCategoryApi } from '../../api/admin/category-api'
import { categoryApi as commonCategoryApi } from '../../api/common/category-api'

const initialState = {
    categories: {
        data: [] as TCategory[]
    },
    category: {} as TCategoryDataSingle,
}

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType>

const categoryReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'APP/GET_CATEGORIES':
            return {
                ...state,
                categories: action.payload
            }
        case 'APP/GET_CATEGORY':
            return {
                ...state,
                category: action.payload
            }
        default:
            return state
    }
}

export const actions = {
    getCategories: (categories: TCategoryData) => ({ type: 'APP/GET_CATEGORIES', payload: categories } as const),
    getCategory: (category: TCategoryDataSingle) => ({ type: 'APP/GET_CATEGORY', payload: category } as const)
}

export const common = {
    getCategories: (): ThunkType => async (dispatch) => {
        const categories = await commonCategoryApi.get()
        dispatch(actions.getCategories(categories))
    }
}

export const admin = {
    getCategories: (): ThunkType => async (dispatch) => {
        const categories = await adminCategoryApi.get()
        dispatch(actions.getCategories(categories))
    },
    getCategory: (categoryId: string): ThunkType => async (dispatch) => {
        const category = await adminCategoryApi.getById(categoryId)
        dispatch(actions.getCategory(category))
    },
    createCategory: (body: TCategory): ThunkType => async (dispatch) => {
        await adminCategoryApi.create(body)
    },
    updateCategory: (categoryId: string, body: TCategory): ThunkType => async (dispatch) => {
        await adminCategoryApi.update(categoryId, body)
    },
    deleteCategory: (categoryId: string): ThunkType => async (dispatch) => {
        await adminCategoryApi.delete(categoryId)
        const categories = await adminCategoryApi.get()
        dispatch(actions.getCategories(categories))
    }
}

export default categoryReducer