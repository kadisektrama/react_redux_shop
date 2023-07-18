import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { useParams } from 'react-router-dom'

import { AppStateType } from '../../../../redux/redux-store'
import { admin } from '../../../../redux/reducers/order-reducer'
import { TOrderDataSingle } from '../../../../types/types'
import View from './view'

const { getOrder } = admin

type TMapStateToProps = {
    order: TOrderDataSingle
}

type TMapDispatchToProps = {
    getOrder: (orderId: string) => void
}

type TUseParams = {
    orderId: string
}

const ViewContainer: React.FC<TMapStateToProps & TMapDispatchToProps> = (props) => {
    const [isLoaded, setIsLoaded] = useState<boolean>(false)
    const { orderId } = useParams<TUseParams>()

    useEffect(() => {
        Promise.all([props.getOrder(orderId!)])
            .then(() => setIsLoaded(true))
    }, [])

    return (
        <View
            isLoaded={isLoaded}
            order={props.order}
        />
    )
}

const mapStateToProps = (state: AppStateType) => {
    return ({
        order: state.order.order
    })
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, { getOrder })
)(ViewContainer)