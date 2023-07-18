import React, { useEffect } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Create from './create'
import { TBook, TCurrencyData } from '../../../../types/types'
import { admin } from '../../../../redux/reducers/book-reducer'
import { admin as adminCurrency } from '../../../../redux/reducers/currency-reducer'
import { AppStateType } from '../../../../redux/redux-store'

const { createBook } = admin
const { getCurrencies } = adminCurrency

type TDispatchProps = {
    createBook: (body: TBook) => void,
    getCurrencies: () => void
}

type TMapStateToProps = {
    currencies: TCurrencyData
}

const CreateContainer: React.FC<TDispatchProps & TMapStateToProps> = (props) => {
    const navigate = useNavigate()

    useEffect(() => {
        Promise.all([props.getCurrencies()])
    }, [])

    const createBook = async (body: TBook) => {
        Promise.all([props.createBook(body)])
            .then(() => navigate('/admin/books'))
    }

    return (
        <Create
            createBook={(body: TBook) => createBook(body)}
            currencies={props.currencies}
        />
    )
}

const mapStateToProps = (state: AppStateType) => {
    return ({
        currencies: state.currency.currencies
    })
}

export default compose(
    connect(mapStateToProps, { createBook, getCurrencies })
)(CreateContainer)

