import React, { useState, useEffect } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'

import SimpleLoader from '../../../components/common/loader'
import { AppStateType } from '../../../redux/redux-store'
import Chat from './chat'
import { TUserDataSingle } from '../../../types/types'
import { guest } from '../../../redux/reducers/chat-reducer'

const { getChat } = guest

type TMapStateToProps = {
    chat: any,
    user: TUserDataSingle
}

type TDispatchToProps = {
    getChat: (messages: any) => void,
}

type TUseParams = {
    inboxId: string
}

const ChatsContainer: React.FC<TMapStateToProps & TDispatchToProps> = (props) => {
    const [isLoaded, setIsLoaded] = useState(false)
    const { inboxId } = useParams<TUseParams>()

    const wsConnection = new WebSocket("ws://localhost:8081")

    const sendMessage = (message: string) => {
        const data = {
            type: 'message',
            uid: props.user.data._id,
            chat_id: inboxId,
            message
        }

        wsConnection.send(JSON.stringify(data))
    }

    wsConnection.onmessage = function(event) {
        const messages = JSON.parse(event.data)
        props.getChat(messages)
        setIsLoaded(true)
    }

    wsConnection.onclose = function(event) {
        if (event.wasClean) {
            console.log('Соединение закрыто чисто')
        } else {
            console.log('Обрыв соединения') // например, "убит" процесс сервера
        }
        console.log('Код: ' + event.code + ' причина: ' + event.reason)
    }

    wsConnection.onerror = function(error) {
        console.log("Ошибка " + error)
    }

    useEffect(() => {
        wsConnection.onopen = function() {
            console.log("Соединение установлено.")

            const data = {
                type: 'connection',
                chat_id: window.location.pathname.split('/').at(-1),
            }

            wsConnection.send(JSON.stringify(data))
        }
    }, [])

    return (
        <>{isLoaded ? <Chat chat={props.chat} user={props.user} sendMessage={sendMessage} /> : <SimpleLoader />}</>
    )
}

const MapStateToProps = (state: AppStateType) => {
    return ({
        chat: state.chat.chat,
        user: state.user.user,
    })
}

export default compose<React.ComponentType>(
    connect(MapStateToProps, { getChat })
)(ChatsContainer)