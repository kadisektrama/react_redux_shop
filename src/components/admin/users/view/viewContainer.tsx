import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { useParams } from 'react-router-dom'

import { AppStateType } from '../../../../redux/redux-store'
import { admin } from '../../../../redux/reducers/user-reducer'
import { TUserDataSingle } from '../../../../types/types'
import ViewUser from './view'

const { getUser } = admin

type TMapStateToProps = {
    user: TUserDataSingle
}

type TMapDispatchToProps = {
    getUser: (userId: string) => void
}

type TUseParams = {
    userId: string
}

const ViewContainer: React.FC<TMapStateToProps & TMapDispatchToProps> = (props) => {
    const [isLoaded, setIsLoaded] = useState<boolean>(false)
    const { userId } = useParams<TUseParams>()

    useEffect(() => {
        Promise.all([props.getUser(userId!)])
            .then(() => setIsLoaded(true))
    }, [])

    return (
        <ViewUser
            isLoaded={isLoaded}
            user={props.user}
        />
    )
}

const mapStateToProps = (state: AppStateType) => {
    return ({
        user: state.user.user
    })
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, { getUser })
)(ViewContainer)