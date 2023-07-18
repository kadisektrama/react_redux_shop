import React from 'react'
import { Link } from 'react-router-dom'

import { Card } from 'antd'
import { Typography } from 'antd'

import { TProduct } from '../../../../types/types'

const { Title, Paragraph } = Typography

const product: React.FC<TProduct> = (props) => {
    return (
        <Link to={`/${props.__t}/${props._id}`}>
            <Card
                style={{ width: '250px' }}
                className='card_cell'
                cover={
                    <img
                        alt="example"
                        src={props.images?.at(0)?.url || "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"}
                    />
                }
            >
                <Title className='text-inline' level={4}>{props.title}</Title>
                <Paragraph>{props.description}</Paragraph>
            </Card>
        </Link>
    )
}

export default product