import React from 'react'

import { CheckOutlined, CloseOutlined } from '@ant-design/icons'

import { TBicycleDataSingle } from '../../../../types/types'
import SimpleLoader from '../../../common/loader'

type TMapStateToProps = {
    bicycle: TBicycleDataSingle,
    isLoaded: boolean,
}

const view: React.FC<TMapStateToProps> = (props) => {
    return (
        <>
            {props.isLoaded ? (
                <div className="admin-view">
                    <div>Id</div>
                    <div>{props.bicycle.data._id}</div>
                    <div>Title</div>
                    <div>{props.bicycle.data.title}</div>
                    <div>Description</div>
                    <div>{props.bicycle.data.description}</div>
                    <div>User ID</div>
                    <div>{props.bicycle.data.user_id}</div>
                    <div>Price</div>
                    <div>{props.bicycle.data.price}</div>
                    <div>Currency</div>
                    <div>{props.bicycle.data.currency.name}</div>
                    <div>Reviews count</div>
                    <div>{props.bicycle.data.reviews_count}</div>
                    <div>Rating</div>
                    <div>{props.bicycle.data.rating}</div>
                    <div>Color</div>
                    <div>{props.bicycle.data.color}</div>
                    <div>Speed count</div>
                    <div>{props.bicycle.data.speeds_count}</div>
                    <div>Pedals</div>
                    <div>{props.bicycle.data.pedals}</div>
                    <div>Brakes</div>
                    <div>{props.bicycle.data.brakes}</div>
                    <div>Shock absorber</div>
                    <div>{props.bicycle.data.shock_absorber ? <CheckOutlined style={{ color: 'green' }} /> : <CloseOutlined style={{ color: 'red' }} />}</div>
                    <div>Wheel</div>
                    <div>{props.bicycle.data.wheel}</div>
                    <div>Frame size</div>
                    <div>{props.bicycle.data.frame_size}</div>
                    <div>Rider height</div>
                    <div>{props.bicycle.data.rider_height}</div>
                </div>
            ) : (
                <SimpleLoader />
            )}
        </>
    )
}

export default view