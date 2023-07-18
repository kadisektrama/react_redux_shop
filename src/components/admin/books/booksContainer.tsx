import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'

import Books from './books'
import { AppStateType } from '../../../redux/redux-store'
import { TBookData } from '../../../types/types'
import { admin } from '../../../redux/reducers/book-reducer'

const { getBooks, deleteBook } = admin

type TMapProps = {
    books: TBookData
}

export type TDispatchProps = {
    getBooks: () => void,
    deleteBook: (bookId: string) => void,
}

const BooksContainer: React.FC<TMapProps & TDispatchProps> = (props) => {
    const [isLoaded, setIsLoaded] = useState<boolean>(false)

    useEffect(() => {
        Promise.all([props.getBooks()])
            .then(() => setIsLoaded(true))
    }, [])

    return <Books
        isLoaded={isLoaded}
        books={props.books}
        deleteBook={props.deleteBook}
    />
}

const mapStateToProps = (state: AppStateType) => {
    return ({
        books: state.book.books,
    })
}

export default compose<React.ComponentType> (
    connect(mapStateToProps , { getBooks, deleteBook })
)(BooksContainer)

