import React from 'react'
import { Link } from 'react-router-dom'

import { Card } from 'antd'
import { Typography } from 'antd'

import { TOrder } from '../../../../types/types'

const { Title, Paragraph } = Typography

const card: React.FC<TOrder> = (props) => {
    return (
        <Link to={`/guest/${props._id}`}>
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
                <Title className='text-inline' level={4}>{props.product_id.title}</Title>
                <Paragraph>Price: {props.product_id.price / 1000 + '' + props.product_id.currency.name}</Paragraph>
                <Paragraph>Status: {props.status}</Paragraph>
            </Card>
        </Link>
    )
}

export default card