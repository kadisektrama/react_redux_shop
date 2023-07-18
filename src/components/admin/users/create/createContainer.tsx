import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { useNavigate } from 'react-router-dom'

import CreateUser from './create'
import { TRoleData, TUser } from '../../../../types/types'
import { admin as adminUsers } from '../../../../redux/reducers/user-reducer'
import SimpleLoader from '../../../common/loader'
import { AppStateType } from '../../../../redux/redux-store'
import { admin as adminRoles } from '../../../../redux/reducers/role-reducer'

const { createUser } = adminUsers
const { getRoles } = adminRoles

type TMapDispatchToProps = {
    createUser: (body: TUser) => void
    getRoles: () => void
}

type TMapStateToProps = {
    roles: TRoleData,
}

const CreateUserContainer: React.FC<TMapDispatchToProps & TMapStateToProps> = (props) => {
    const navigate = useNavigate()
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        Promise.all([props.getRoles()])
            .then(() => setIsLoaded(true))
    }, [])

    const createUser = async (body: TUser) => {
        Promise.all([props.createUser(body)])
            .then(() => navigate('/admin/users'))
    }

    return (
        <>
            {isLoaded ? (
                <CreateUser
                    createUser={createUser}
                    roles={props.roles}
                />
            ) : (
                <SimpleLoader />
            )}
        </>
    )
}

const mapStateToProps = (state: AppStateType) => {
    return ({
        roles: state.role.roles,
    })
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, { createUser, getRoles })
)(CreateUserContainer)