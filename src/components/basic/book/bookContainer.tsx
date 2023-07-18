import React, { useState, useEffect } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import cookie from 'cookie'

import { AppStateType } from '../../../redux/redux-store'
import Book from './book'
import { common } from '../../../redux/reducers/book-reducer'
import { guest as guestOrder } from '../../../redux/reducers/order-reducer'
import { guest as guestFavourites } from '../../../redux/reducers/favourite-reducer'
import { guest as guestChatMessage } from '../../../redux/reducers/chat-reducer'

const { token } = cookie.parse(document.cookie)

const { getBook } = common
const { createOrder } = guestOrder
const { getFavourites, createFavourite, deleteFavourite } = guestFavourites
const { createMessage } = guestChatMessage

type TMapStateProps = ReturnType<typeof mapStateToProps>

export type TMapDispatchToProps = {
    getBook: (bookId: string) => void
    createOrder: (bicycleId: string) => void,
    getFavourites: () => void,
    createFavourite: (product_id: string) => void,
    deleteFavourite: (product_id: string) => void,
    createMessage: (body: any) => void,
}

type TUseParams = {
    bookId: string
}

const BookContainer: React.FC<TMapStateProps & TMapDispatchToProps> = (props) => {
    const [isLoaded, setIsLoaded] = useState<boolean>(false)
    const { bookId } = useParams<TUseParams>()

    useEffect(() => {
        Promise.all([props.getBook(bookId!), token && props.getFavourites()])
            .then(() => setIsLoaded(true))
    }, [])

    const createOrder = (bookId: string) => {
        Promise.all([props.createOrder(bookId)])
            .then(() => document.location = document.location.origin)
    }

    return <Book
        bookId={bookId!}
        isLoaded={isLoaded}
        book={props.book}
        user={props.user}
        favourites={props.favourites}
        createOrder={createOrder}
        createFavourite={props.createFavourite}
        deleteFavourite={props.deleteFavourite}
        createMessage={props.createMessage}
    />
}

const mapStateToProps = (state: AppStateType) => {
    return ({
        book: state.book.book,
        favourites: state.favourite.favourites,
        user: state.user.user,
    })
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, { getBook, createOrder, getFavourites, createFavourite, deleteFavourite, createMessage })
)(BookContainer)