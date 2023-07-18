import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { useParams } from 'react-router-dom'

import { AppStateType } from '../../../../redux/redux-store'
import { admin } from '../../../../redux/reducers/book-reducer'
import { TBookDataSingle } from '../../../../types/types'
import ViewBook from './view'

const { getBook } = admin

type TMapStateToProps = {
    book: TBookDataSingle
}

type TMapDispatchToProps = {
    getBook: (bookId: string) => void
}

type TUseParams = {
    bookId: string
}

const ViewContainer: React.FC<TMapStateToProps & TMapDispatchToProps> = (props) => {
    const [isLoaded, setIsLoaded] = useState<boolean>(false)
    const { bookId } = useParams<TUseParams>()

    useEffect(() => {
        Promise.all([props.getBook(bookId!)])
            .then(() => setIsLoaded(true))
    }, [])

    return (
        <ViewBook
            isLoaded={isLoaded}
            book={props.book}
        />
    )
}

const mapStateToProps = (state: AppStateType) => {
    return ({
        book: state.book.book
    })
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, { getBook })
)(ViewContainer)