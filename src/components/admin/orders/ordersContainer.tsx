import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'

import Orders from './orders'
import { AppStateType } from '../../../redux/redux-store'
import { TOrderData } from '../../../types/types'
import { admin } from '../../../redux/reducers/order-reducer'

const { getOrders, deleteOrder } = admin

type TMapStateToProps = {
    orders: TOrderData
}

export type TDispatchProps = {
    getOrders: () => void,
    deleteOrder: (orderId: string) => void
}

const OrdersContainer: React.FC<TMapStateToProps & TDispatchProps> = (props) => {
    const [isLoaded, setIsLoaded] = useState<boolean>(false)

    useEffect(() => {
        Promise.all([props.getOrders()])
            .then(() => setIsLoaded(true))
    }, [])

    return <Orders
        isLoaded={isLoaded}
        orders={props.orders}
        deleteOrder={props.deleteOrder}
    />
}

const mapStateToProps = (state: AppStateType) => {
    return ({
        orders: state.order.orders,
    })
}

export default compose<React.ComponentType> (
    connect(mapStateToProps , { getOrders, deleteOrder })
)(OrdersContainer)

