import React from 'react'

import { Typography } from 'antd'

import { TFavouriteData } from '../../../types/types'
import Cards from './cards/cards'
import SimpleLoader from '../../common/loader'

const { Title } = Typography

type TMapStateToProps = {
    favourites: TFavouriteData,
    isLoaded: boolean
}

const favourites: React.FC<TMapStateToProps> = (props) => {
    return (
        <>
            <Title level={2}>Favourites</Title>

            <div className='recommendation_container'>
                {props.isLoaded ? <Cards {...props} /> : <SimpleLoader />}
            </div>
        </>
    )
}

export default favourites