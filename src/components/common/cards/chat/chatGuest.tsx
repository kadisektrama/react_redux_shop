import React from 'react'
import { Link } from 'react-router-dom'

import { Card } from 'antd'
import { Typography } from 'antd'

import { TChat } from '../../../../types/types'

const { Paragraph } = Typography

const card: React.FC<TChat> = (props) => {
    return (
        <Link to={`/guest/inbox/${props._id}`}>
            <Card
                style={{ width: '250px' }}
                className='card_cell'
                cover={
                    <img
                        alt="example"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                }
            >
                <Paragraph>Name: {props.host_uid.first_name}</Paragraph>
            </Card>
        </Link>
    )
}

export default card