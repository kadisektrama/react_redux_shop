import React, {useEffect} from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Create from './create'
import { TBicycle, TCurrencyData } from '../../../../types/types'
import { admin } from '../../../../redux/reducers/bicycle-reducer'
import { admin as adminCurrency } from '../../../../redux/reducers/currency-reducer'
import { AppStateType } from '../../../../redux/redux-store'

const { createBicycle } = admin
const { getCurrencies } = adminCurrency

type TDispatchProps = {
    createBicycle: (body: TBicycle) => void,
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

    const createBicycle = async (body: TBicycle) => {
        Promise.all([props.createBicycle(body)])
            .then(() => navigate('/admin/bicycles'))
    }

    return (
        <Create
            createBicycle={(body: TBicycle) => createBicycle(body)}
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
    connect(mapStateToProps, { createBicycle, getCurrencies })
)(CreateContainer)

