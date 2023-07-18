import React from 'react'

import SimpleLoader from '../../common/loader'
import { TUserData } from '../../../types/types'
import Cards from './cards/cards'

type TMapProps = {
    isLoaded: boolean,
    users: TUserData
}

const Users: React.FC<TMapProps> = (props) => {
    return (
        <div>
            {props.isLoaded ? <Cards users={props.users} /> : <SimpleLoader />}
        </div>
    )
}

export default Users