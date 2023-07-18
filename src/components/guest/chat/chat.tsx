import React from 'react'

import { Input, Button } from 'antd'
import { TUserDataSingle } from '../../../types/types'

type TMapStateToProps = {
    chat: any,
    user: TUserDataSingle,
}

type TMapDispatchToProps = {
    sendMessage: (message: string) => void
}

const chat: React.FC<TMapStateToProps & TMapDispatchToProps> = (props) => {
    const message = React.useRef<any>()

    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '20px', marginBottom: '20px' }}>
                {props.chat.map((message: any) => <div key={message.index} style={{ marginLeft: message.uid === props.user.data._id ? 'auto' : 0, borderRadius: '6px', width: 'max-content', padding: '2px 10px 2px 10px', background: message.uid === props.user.data._id ? 'grey' : 'white' }}>{message.message}</div>)}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 150px', gap: '10px' }}>
                <Input ref={message} placeholder="Text message" />
                <Button type="primary" onClick={() => props.sendMessage(message.current.input.value)}>Send</Button>
            </div>
        </div>
    )
}

export default chat