import React, { useState, useEffect } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'

import { AppStateType } from '../../../redux/redux-store'
import Orders from './orders'
import { TOrderData } from '../../../types/types'
import { host } from '../../../redux/reducers/order-reducer'

const { getOrders } = host

type TMapStateToProps = {
    orders: TOrderData
}

type TDispatchToProps = {
    getOrders: () => void
}

const OrdersContainer: React.FC<TMapStateToProps & TDispatchToProps> = (props) => {
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        Promise.all([props.getOrders()])
            .then(() => setIsLoaded(true))
    }, [])

    return (
        <Orders
            orders={props.orders}
            isLoaded={isLoaded}
        />
    )
}

const MapStateToProps = (state: AppStateType) => {
    return ({
        orders: state.order.orders
    })
}

export default compose<React.ComponentType>(
    connect(MapStateToProps, { getOrders })
)(OrdersContainer)