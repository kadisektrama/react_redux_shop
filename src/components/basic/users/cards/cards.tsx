import React from 'react'

import { TUserData } from '../../../../types/types'
import Card from './card/card'

type PropsType = {
    users: TUserData,
}

const cards: React.FC<PropsType> = (props) => {
    return (
        <>
            {props.users.data.map(user => <Card key={user._id} {...user} />)}
        </>
    )
}

export default cards