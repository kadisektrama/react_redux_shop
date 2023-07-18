import React, { useState, useEffect, ComponentType } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

import Update from './update'
import { TBicycle, TBicycleDataSingle, TCurrencyData } from '../../../../types/types'
import { AppStateType } from '../../../../redux/redux-store'
import { admin } from '../../../../redux/reducers/bicycle-reducer'
import { admin as adminCurrency } from '../../../../redux/reducers/currency-reducer'

const { updateBicycle, getBicycle } = admin
const { getCurrencies } = adminCurrency

type TDispatchProps = {
    getBicycle: (bicycleId: string) => void,
    updateBicycle: (bicycleId: string, body: TBicycle) => void,
    getCurrencies: () => void,
}

type TMapProps = {
    isLoaded: boolean,
    bicycle: TBicycleDataSingle,
    currencies: TCurrencyData,
}

type TUseParams = {
    bicycleId: string
}

const CreateBookContainer: React.FC<TMapProps & TDispatchProps> = (props) => {
    const [isLoaded, setIsLoaded] = useState<boolean>(false)
    const navigate = useNavigate()
    const { bicycleId } = useParams<TUseParams>()

    const updateBicycle = async (bicycleId: string, body: TBicycle) => {
        await props.updateBicycle(bicycleId, body)
        navigate('/admin/bicycles')
    }

    useEffect(() => {
        Promise.all([props.getBicycle(bicycleId!), props.getCurrencies()])
            .then(() => setIsLoaded(true))
    }, [])

    return (
        <>
            {isLoaded && (
                <Update
                    bicycleId={bicycleId!}
                    updateBicycle={(bicycleId: string, body: TBicycle) => updateBicycle(bicycleId, body)}
                    isLoaded={isLoaded}
                    bicycle={props.bicycle}
                    currencies={props.currencies}
                />
            )}
        </>
    )
}

const mapStateToProps = (state: AppStateType) => {
    return ({
        bicycle: state.bicycle.bicycle,
        currencies: state.currency.currencies
    })
}

export default compose<ComponentType>(
    connect(mapStateToProps, { getBicycle, updateBicycle, getCurrencies })
)(CreateBookContainer)

