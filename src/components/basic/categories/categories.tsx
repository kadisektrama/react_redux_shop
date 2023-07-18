import React from 'react'

import SimpleLoader from '../../common/loader'
import { TCategoryData } from '../../../types/types'
import Cards from './cards/cards'

type TMapStateProps = {
    isLoaded: boolean,
    categories: TCategoryData
}

const Categories: React.FC<TMapStateProps> = (props) => {
    return (
        <div>
            {props.isLoaded ? <Cards categories={props.categories} /> : <SimpleLoader />}
        </div>
    )
}

export default Categories