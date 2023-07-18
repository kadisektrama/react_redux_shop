import React, { useState, useEffect } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import cookie from 'cookie'

import { AppStateType } from '../../../redux/redux-store'
import Bicycle from './bicycle'
import { common } from '../../../redux/reducers/bicycle-reducer'
import { guest as guestOrders } from '../../../redux/reducers/order-reducer'
import { guest as guestFavourites } from '../../../redux/reducers/favourite-reducer'
import { guest as guestChatMessage } from '../../../redux/reducers/chat-reducer'

const { token } = cookie.parse(document.cookie)

const { getBicycle } = common
const { createOrder } = guestOrders
const { getFavourites, createFavourite, deleteFavourite } = guestFavourites
const { createMessage } = guestChatMessage

type TMapStateProps = ReturnType<typeof mapStateToProps>

export type TMapDispatchToProps = {
    getBicycle: (bicycleId: string) => void,
    createOrder: (bicycleId: string) => void,
    getFavourites: () => void,
    createFavourite: (product_id: string) => void,
    deleteFavourite: (product_id: string) => void,
    createMessage: (body: any) => void,
}

type TUseParams = {
    bicycleId: string
}

const BicycleContainer: React.FC<TMapStateProps & TMapDispatchToProps> = (props) => {
    const [isLoaded, setIsLoaded] = useState<boolean>(false)
    const { bicycleId } = useParams<TUseParams>()

    useEffect(() => {
        Promise.all([props.getBicycle(bicycleId!), token && props.getFavourites()])
            .then(() => setIsLoaded(true))
    }, [])

    const createOrder = (bicycleId: string) => {
        Promise.all([props.createOrder(bicycleId)])
            .then(() => document.location = document.location.origin)
    }

    return <Bicycle
        bicycleId={bicycleId!}
        isLoaded={isLoaded}
        bicycle={props.bicycle}
        user={props.user}
        favourites={props.favourites}
        createOrder={createOrder}
        createFavourite={props.createFavourite}
        deleteFavourite={props.deleteFavourite}
        createMessage={props.createMessage}
    />
}

const mapStateToProps = (state: AppStateType) => {
    return ({
        bicycle: state.bicycle.bicycle,
        favourites: state.favourite.favourites,
        user: state.user.user,
    })
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, { getBicycle, createOrder, getFavourites, createFavourite, deleteFavourite, createMessage })
)(BicycleContainer)