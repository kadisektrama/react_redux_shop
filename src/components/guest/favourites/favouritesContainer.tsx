import React, { useState, useEffect } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'

import { AppStateType } from '../../../redux/redux-store'
import Favourites from './favourites'
import { TFavouriteData } from '../../../types/types'
import { guest } from '../../../redux/reducers/favourite-reducer'

const { getFavourites } = guest

type TMapStateToProps = {
    favourites: TFavouriteData
}

type TDispatchToProps = {
    getFavourites: () => void
}

const OrdersContainer: React.FC<TMapStateToProps & TDispatchToProps> = (props) => {
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        Promise.all([props.getFavourites()])
            .then(() => setIsLoaded(true))
    }, [])

    return (
        <Favourites
            favourites={props.favourites}
            isLoaded={isLoaded}
        />
    )
}

const MapStateToProps = (state: AppStateType) => {
    return ({
        favourites: state.favourite.favourites
    })
}

export default compose<React.ComponentType>(
    connect(MapStateToProps, { getFavourites })
)(OrdersContainer)