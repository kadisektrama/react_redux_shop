import React from 'react'

import { Typography } from 'antd'

import Cards from './cards/cards'
import { TProductData} from '../../../types/types'
import SimpleLoader from '../../common/loader'

const { Title } = Typography

type MapPropsType = {
    isLoaded: boolean,
    products: TProductData,
}

const Products: React.FC<MapPropsType> = (props) => {
    return (
        <>
            <Title level={2}>Products</Title>

            <div className='recommendation_container'>
                {props.isLoaded ? <Cards {...props} /> : <SimpleLoader />}
            </div>
        </>
    )
}

export default Products