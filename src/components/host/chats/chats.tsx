import React from 'react'

import { Typography } from 'antd'

import { TChatData } from '../../../types/types'
import Card from '../../common/cards/chat/chatHost'
import Chat from '../chat/chatContainer'

const { Title } = Typography

type TMapStateToProps = {
    chats: TChatData,
    isLoaded: boolean,
    inboxId: string | undefined,
}

const chats: React.FC<TMapStateToProps> = (props) => {
    return (
        <>
            <Title level={2}>Inbox</Title>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
                <div>
                    {props.chats.data.map((chat) => <Card key={chat._id} {...chat} />)}
                </div>
                <div>{props.inboxId && <Chat />}</div>
            </div>
        </>
    )
}

export default chats