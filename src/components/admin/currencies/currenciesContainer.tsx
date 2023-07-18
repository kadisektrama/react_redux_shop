import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'

import { AppStateType } from '../../../redux/redux-store'
import { TCurrencyData } from '../../../types/types'
import { admin } from '../../../redux/reducers/currency-reducer'
import Currencies from './currencies'

const { getCurrencies, deleteCurrency } = admin

type TMapProps = {
    currencies: TCurrencyData
}

export type TDispatchProps = {
    getCurrencies: () => void,
    deleteCurrency: (currencyId: string) => void
}

const CurrenciesContainer: React.FC<TMapProps & TDispatchProps> = (props) => {
    const [isLoaded, setIsLoaded] = useState<boolean>(false)

    useEffect(() => {
        Promise.all([props.getCurrencies()])
            .then(() => setIsLoaded(true))
    }, [])

    return <Currencies
        isLoaded={isLoaded}
        currencies={props.currencies}
        deleteCurrency={props.deleteCurrency}
    />
}

const mapStateToProps = (state: AppStateType) => {
    return ({
        currencies: state.currency.currencies,
    })
}

export default compose<React.ComponentType> (
    connect(mapStateToProps , { getCurrencies, deleteCurrency })
)(CurrenciesContainer)

