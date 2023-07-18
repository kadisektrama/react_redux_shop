import React from 'react'

import { Card } from 'antd'

import { TUser } from '../../../../../types/types'

const { Meta } = Card

const card: React.FC<TUser> = (props) => {
    return (
        <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt='example' src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png' />}
        >
            <Meta title={props.first_name} description={props.last_name} />
        </Card>
    )
}

export default card