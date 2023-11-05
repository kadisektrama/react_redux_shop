import React from 'react'

import Cards from './cards/cards'
import Filters from './filters/filtersContainer'
import { TProductData} from '@typess/types'
import SimpleLoader from '../../common/loader'

type MapPropsType = {
    isLoaded: boolean,
    products: TProductData,
}

const Products: React.FC<MapPropsType> = (props) => {
    return (
        <div>
            <Filters />

            <div className='recommendation_container'>
                {props.isLoaded ? <Cards {...props} /> : <SimpleLoader />}
            </div>
        </div>
    )
}

export default Products