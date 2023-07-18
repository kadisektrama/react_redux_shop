import { InferActionsTypes, BaseThunkType } from '../redux-store'
import { TBook, TBookData, TBookDataSingle } from '../../types/types'
import { bookApi as adminBookApi } from '../../api/admin/book-api'
import { bookApi as commonBookApi } from '../../api/common/book-api'

const initialState = {
    books: {
        data: [] as TBook[]
    },
    book: {} as TBookDataSingle,
}

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType>

const bookReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'BOOK/GET_BOOKS':
            return {
                ...state,
                books: action.payload
            }
        case 'BOOK/GET_BOOK':
            return {
                ...state,
                book: action.payload
            }
        default:
            return state
    }
}

export const actions = {
    getBooks: (books: TBookData) => ({ type: 'BOOK/GET_BOOKS', payload: books } as const),
    getBook: (book: TBookDataSingle) => ({ type: 'BOOK/GET_BOOK', payload: book } as const)
}

export const admin = {
    getBooks: (): ThunkType => async (dispatch) => {
        const books = await adminBookApi.get()
        dispatch(actions.getBooks(books))
    },
    getBook: (bookId: string): ThunkType => async (dispatch) => {
        const book = await adminBookApi.getById(bookId)
        dispatch(actions.getBook(book))
    },
    createBook: (body: TBook): ThunkType => async () => {
        await adminBookApi.create(body)
    },
    updateBook: (bookId: string, body: TBook): ThunkType => async () => {
        await adminBookApi.update(bookId, body)
    },
    deleteBook: (bookId: string): ThunkType => async (dispatch) => {
        await adminBookApi.delete(bookId)
        const books = await adminBookApi.get()
        dispatch(actions.getBooks(books))
    }
}

export const common = {
    getBook: (bookId: string): ThunkType => async (dispatch) => {
        const book = await commonBookApi.getById(bookId)
        dispatch(actions.getBook(book))
    },
}

export default bookReducer