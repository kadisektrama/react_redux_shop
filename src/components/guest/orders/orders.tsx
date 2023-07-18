import React from 'react'

import { Typography } from 'antd'

import { TOrderData } from '../../../types/types'
import Cards from './cards/cards'
import SimpleLoader from '../../common/loader'

const { Title } = Typography

type TMapStateToProps = {
    orders: TOrderData,
    isLoaded: boolean
}

const orders: React.FC<TMapStateToProps> = (props) => {
    return (
        <>
            <Title level={2}>Orders</Title>

            <div className='recommendation_container'>
                {props.isLoaded ? <Cards {...props} /> : <SimpleLoader />}
            </div>
        </>
    )
}

export default orders