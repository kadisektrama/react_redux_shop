import React from 'react'

import { TOrderData } from '../../../../types/types'
import Card from '../../../common/cards/order/order'

type PropsType = {
    orders: TOrderData,
}

const cards: React.FC<PropsType> = (props) => {
    return (
        <>
            {props.orders.data.map(order => <Card key={order._id} {...order} />)}
        </>
    )
}

export default cards