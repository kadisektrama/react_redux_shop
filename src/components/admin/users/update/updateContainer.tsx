import React, { useState, useEffect, ComponentType } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

import Update from './update'
import { TRoleData, TUser, TUserDataSingle } from '@typess/types'
import { AppStateType } from '../../../../redux/redux-store'
import { admin as adminUsers } from '../../../../redux/reducers/user-reducer'
import { admin as adminRoles } from '../../../../redux/reducers/role-reducer'

const { updateUser, getUser } = adminUsers
const { getRoles } = adminRoles

type TDispatchProps = {
    getUser: (userId: string) => void,
    updateUser: (userId: string, body: TUser) => void,
    getRoles: () => void,
}

type TMapProps = {
    isLoaded: boolean,
    user: TUserDataSingle,
    roles: TRoleData
}

type TUseParams = {
    userId: string
}

const CreateBookContainer: React.FC<TMapProps & TDispatchProps> = (props) => {
    const [isLoaded, setIsLoaded] = useState<boolean>(false)
    const navigate = useNavigate()
    const { userId } = useParams<TUseParams>()

    const updateUser = async (userId: string, body: TUser) => {
        await props.updateUser(userId, body)
        navigate('/admin/users')
    }

    useEffect(() => {
        Promise.all([props.getUser(userId!), props.getRoles()])
            .then(() => setIsLoaded(true))
    }, [])

    return (
        <>
            {isLoaded && (
                <Update
                    userId={userId!}
                    updateUser={(userId: string, body: TUser) => updateUser(userId, body)}
                    isLoaded={isLoaded}
                    user={props.user}
                    roles={props.roles}
                />
            )}
        </>
    )
}

const mapStateToProps = (state: AppStateType) => {
    return ({
        user: state.user.user,
        roles: state.role.roles,
    })
}

export default compose<ComponentType>(
    connect(mapStateToProps, { getUser, updateUser, getRoles })
)(CreateBookContainer)

