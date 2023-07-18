import React, { useState, useEffect, ComponentType } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

import Update from './update'
import { TBook, TBookDataSingle, TCurrencyData } from '@typess/types'
import { AppStateType } from '../../../../redux/redux-store'
import { admin } from '../../../../redux/reducers/book-reducer'
import { admin as adminCurrency } from '../../../../redux/reducers/currency-reducer'

const { updateBook, getBook } = admin
const { getCurrencies } = adminCurrency

type TDispatchProps = {
    getBook: (bookId: string) => void,
    updateBook: (bookId: string, body: TBook) => void,
    getCurrencies: () => void,
}

type TMapProps = {
    isLoaded: boolean,
    book: TBookDataSingle,
    currencies: TCurrencyData,
}

type TUseParams = {
    bookId: string
}

const CreateBookContainer: React.FC<TMapProps & TDispatchProps> = (props) => {
    const [isLoaded, setIsLoaded] = useState<boolean>(false)
    const navigate = useNavigate()
    const { bookId } = useParams<TUseParams>()

    const updateBook = async (bookId: string, body: TBook) => {
        await props.updateBook(bookId, body)
        navigate('/admin/books')
    }

    useEffect(() => {
        Promise.all([props.getBook(bookId!), props.getCurrencies()])
            .then(() => setIsLoaded(true))
    }, [])

    return (
        <>
            {isLoaded && (
                <Update
                    bookId={bookId!}
                    updateBook={(bookId: string, body: TBook) => updateBook(bookId, body)}
                    isLoaded={isLoaded}
                    book={props.book}
                    currencies={props.currencies}
                />
            )}
        </>
    )
}

const mapStateToProps = (state: AppStateType) => {
    return ({
        book: state.book.book,
        currencies: state.currency.currencies,
    })
}

export default compose<ComponentType>(
    connect(mapStateToProps, { getBook, updateBook, getCurrencies })
)(CreateBookContainer)

