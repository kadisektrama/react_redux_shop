import React, { useState, useEffect } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'

import { AppStateType } from '../../../redux/redux-store'
import Chats from './chats'
import { TChatData } from '../../../types/types'
import { host } from '../../../redux/reducers/chat-reducer'
import { useParams } from 'react-router-dom'

const { getChats } = host

type TMapStateToProps = {
    chats: TChatData
}

type TDispatchToProps = {
    getChats: () => void
}

type TUseParams = {
    inboxId: string
}

const ChatsContainer: React.FC<TMapStateToProps & TDispatchToProps> = (props) => {
    const [isLoaded, setIsLoaded] = useState(false)
    const { inboxId } = useParams<TUseParams>()

    useEffect(() => {
        Promise.all([props.getChats()])
            .then(() => setIsLoaded(true))
    }, [])

    return (
        <Chats
            chats={props.chats}
            inboxId={inboxId}
            isLoaded={isLoaded}
        />
    )
}

const MapStateToProps = (state: AppStateType) => {
    return ({
        chats: state.chat.chats
    })
}

export default compose<React.ComponentType>(
    connect(MapStateToProps, { getChats })
)(ChatsContainer)