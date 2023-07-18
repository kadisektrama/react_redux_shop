import React from 'react'

import { TUserDataSingle } from '../../../../types/types'
import SimpleLoader from '../../../common/loader'

type TMapStateToProps = {
    user: TUserDataSingle,
    isLoaded: boolean,
}

const view: React.FC<TMapStateToProps> = (props) => {
    return (
        <>
            {props.isLoaded ? (
                <div className="admin-view">
                    <div>Id</div>
                    <div>{props.user.data._id}</div>
                    <div>First name</div>
                    <div>{props.user.data.first_name}</div>
                    <div>Last name</div>
                    <div>{props.user.data.last_name}</div>
                    <div>Email</div>
                    <div>{props.user.data.email}</div>
                    <div>Role</div>
                    <div>{props.user.data.role.name}</div>
                    <div>Phone</div>
                    <div>{props.user.data.phone}</div>
                </div>
            ) : (
                <SimpleLoader />
            )}
        </>
    )
}

export default view