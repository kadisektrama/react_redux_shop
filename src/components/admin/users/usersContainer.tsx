import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'

import Users from './users'
import { TUserData } from '../../../types/types'
import { AppStateType } from '../../../redux/redux-store'
import { admin } from '../../../redux/reducers/user-reducer'

const { getUsers, deleteUser } = admin

type TMapStateToProps = {
    users: TUserData
}

type TMapDispatchToProps = {
    getUsers: () => void
    deleteUser: (userId: string) => void
}

const UsersContainer: React.FC<TMapStateToProps & TMapDispatchToProps> = (props) => {
    const [isLoaded, setIsLoaded] = useState<boolean>(false)

    console.log('reload')

    useEffect(() => {
        Promise.all([props.getUsers()])
            .then(() => setIsLoaded(true))
    }, [])

    return (
        <Users
            isLoaded={isLoaded}
            users={props.users}
            deleteUser={props.deleteUser}
        />
    )
}

const mapStateToProps = (state: AppStateType) => {
    return ({
        users: state.user.users
    })
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, { getUsers, deleteUser })
)(UsersContainer)