import React, { useState, useEffect, ComponentType } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

import Update from './update'
import { TCurrency, TCurrencyDataSingle } from '../../../../types/types'
import { AppStateType } from '../../../../redux/redux-store'
import { admin } from '../../../../redux/reducers/currency-reducer'

const { updateCurrency, getCurrency } = admin

type TDispatchProps = {
    getCurrency: (currencyId: string) => void,
    updateCurrency: (currencyId: string, body: TCurrency) => void
}

type TMapProps = {
    isLoaded: boolean,
    currency: TCurrencyDataSingle
}

type TUseParams = {
    currencyId: string
}

const CreateBookContainer: React.FC<TMapProps & TDispatchProps> = (props) => {
    const [isLoaded, setIsLoaded] = useState<boolean>(false)
    const navigate = useNavigate()
    const { currencyId } = useParams<TUseParams>()

    const updateCurrency = async (currencyId: string, body: TCurrency) => {
        await props.updateCurrency(currencyId, body)
        navigate('/admin/currencies')
    }

    useEffect(() => {
        Promise.all([props.getCurrency(currencyId!)])
            .then(() => setIsLoaded(true))
    }, [])

    return (
        <>
            {isLoaded && (
                <Update
                    currencyId={currencyId!}
                    updateCurrency={(categoryId: string, body: TCurrency) => updateCurrency(categoryId, body)}
                    isLoaded={isLoaded}
                    currency={props.currency}
                />
            )}
        </>
    )
}

const mapStateToProps = (state: AppStateType) => {
    return ({
        currency: state.currency.currency,
    })
}

export default compose<ComponentType>(
    connect(mapStateToProps, { getCurrency, updateCurrency })
)(CreateBookContainer)

