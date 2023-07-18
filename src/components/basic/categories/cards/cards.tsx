import React from 'react'

import { TCategoryData } from '../../../../types/types'
import Card from './card/card'

type PropsType = {
    categories: TCategoryData,
}

const cards: React.FC<PropsType> = (props) => {
    return (
        <>
            {props.categories.data.map(category => <Card key={category._id} {...category} />)}
        </>
    )
}

export default cards