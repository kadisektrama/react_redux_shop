import React from 'react'

import { TProductData } from '../../../../types/types'
import Card from '../../../common/cards/product/product'

type PropsType = {
    products: TProductData,
}

const cards: React.FC<PropsType> = (props) => {
    return (
        <>
            {props.products.data.map(product => <Card key={product._id} {...product} />)}
        </>
    )
}

export default cards