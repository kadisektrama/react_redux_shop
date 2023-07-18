import React from 'react'
import { Link } from 'react-router-dom'

import { Card } from 'antd'
import { Typography } from 'antd'

import {TFavourite, TOrder} from '../../../../types/types'

const { Paragraph } = Typography

const card: React.FC<TFavourite> = (props) => {
    return (
        <Link to={`/products/${props._id}`}>
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
                <div>User_id: {props.user_id + ''}</div>
                <Paragraph>Product_id: {props.product_id + ''}</Paragraph>
            </Card>
        </Link>
    )
}

export default card