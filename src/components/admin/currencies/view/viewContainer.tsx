import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { useParams } from 'react-router-dom'

import { AppStateType } from '../../../../redux/redux-store'
import { admin } from '../../../../redux/reducers/currency-reducer'
import { TCurrencyDataSingle } from '../../../../types/types'
import View from './view'

const { getCurrency } = admin

type TMapStateToProps = {
    currency: TCurrencyDataSingle
}

type TMapDispatchToProps = {
    getCurrency: (currencyId: string) => void
}

type TUseParams = {
    currencyId: string
}

const ViewContainer: React.FC<TMapStateToProps & TMapDispatchToProps> = (props) => {
    const [isLoaded, setIsLoaded] = useState<boolean>(false)
    const { currencyId } = useParams<TUseParams>()

    useEffect(() => {
        Promise.all([props.getCurrency(currencyId!)])
            .then(() => setIsLoaded(true))
    }, [])

    return (
        <View
            isLoaded={isLoaded}
            currency={props.currency}
        />
    )
}

const mapStateToProps = (state: AppStateType) => {
    return ({
        currency: state.currency.currency
    })
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, { getCurrency })
)(ViewContainer)