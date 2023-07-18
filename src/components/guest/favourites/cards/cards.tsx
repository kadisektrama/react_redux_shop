import React from 'react'

import { TFavouriteData } from '../../../../types/types'
import Card from '../../../common/cards/favourite/favourite'

type PropsType = {
    favourites: TFavouriteData,
}

const cards: React.FC<PropsType> = (props) => {
    return (
        <>
            {props.favourites.data.map(order => <Card key={order._id} {...order} />)}
        </>
    )
}

export default cards