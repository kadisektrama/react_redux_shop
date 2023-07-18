import React, { useState, useEffect, ComponentType } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

import Update from './update'
import { TOrderDataSingle, TOrder } from '../../../../types/types'
import { AppStateType } from '../../../../redux/redux-store'
import { admin } from '../../../../redux/reducers/order-reducer'

const { updateOrder, getOrder } = admin

type TDispatchProps = {
    getOrder: (orderId: string) => void,
    updateOrder: (orderId: string, body: TOrder) => void,
}

type TMapProps = {
    isLoaded: boolean,
    order: TOrderDataSingle,
}

type TUseParams = {
    orderId: string
}

const CreateBookContainer: React.FC<TMapProps & TDispatchProps> = (props) => {
    const [isLoaded, setIsLoaded] = useState<boolean>(false)
    const navigate = useNavigate()
    const { orderId } = useParams<TUseParams>()

    const updateBicycle = async (orderId: string, body: TOrder) => {
        await props.updateOrder(orderId, body)
        navigate('/admin/orders')
    }

    useEffect(() => {
        Promise.all([props.getOrder(orderId!)])
            .then(() => setIsLoaded(true))
    }, [])

    return (
        <>
            {isLoaded && (
                <Update
                    orderId={orderId!}
                    updateOrder={(orderId: string, body: TOrder) => updateBicycle(orderId, body)}
                    isLoaded={isLoaded}
                    order={props.order}
                />
            )}
        </>
    )
}

const mapStateToProps = (state: AppStateType) => {
    return ({
        order: state.order.order,
    })
}

export default compose<ComponentType>(
    connect(mapStateToProps, { getOrder, updateOrder })
)(CreateBookContainer)

