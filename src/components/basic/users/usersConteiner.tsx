import React, { useState, useEffect } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'

import { AppStateType } from '../../../redux/redux-store'
import Users from './users'
import { common } from '../../../redux/reducers/user-reducer'

const { getUsers } = common

type MapPropsType = ReturnType<typeof mapStateToProps>

export type TDispatchProps = {
    getUsers: () => void
}

const ProductsContainer: React.FC<MapPropsType & TDispatchProps> = (props) => {
    const [isLoaded, setIsLoaded] = useState<boolean>(false)

    useEffect(() => {
        Promise.all([props.getUsers()])
            .then(() => setIsLoaded(true))
    }, [])

    return <Users
        isLoaded={isLoaded}
        users={props.users}
    />
}

const mapStateToProps = (state: AppStateType) => {
    return ({
        users: state.user.users,
    })
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, { getUsers })
)(ProductsContainer)