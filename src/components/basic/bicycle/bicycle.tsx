import React from 'react'
import cookie from 'cookie'

import { Button, Input } from 'antd'
import { HeartFilled, HeartOutlined } from '@ant-design/icons'

import { TBicycleDataSingle, TFavouriteData, TUserDataSingle } from '@typess/types'
import SimpleLoader from '../../common/loader'
import { Images } from './images/images'

const { TextArea } = Input
const { token } = cookie.parse(document.cookie)

type TMapStateProps = {
    isLoaded: boolean,
    bicycle: TBicycleDataSingle,
    user: TUserDataSingle,
    favourites: TFavouriteData,
}

type TDispatchToProps = {
    createOrder: (bicycleId: string) => void,
    createFavourite: (product_id: string) => void,
    deleteFavourite: (product_id: string) => void,
    createMessage: (body: any) => void,
}

type TCustomParams = {
    bicycleId: string
}

const bicycle: React.FC<TMapStateProps & TDispatchToProps & TCustomParams> = (props) => {
    const [message, setMessage] = React.useState('')

    const memoizedImages = React.useMemo(() => {
        return props.bicycle.data?.images
    }, [props.isLoaded])

    return (
        <div>
            {props.isLoaded ? (
                <>
                    <Images images={memoizedImages} />
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
                        <div>Title</div>
                        <div>{props.bicycle.data.title}</div>
                        <div>Description</div>
                        <div>{props.bicycle.data.description}</div>
                        <div>Price</div>
                        <div>{props.bicycle.data.price}</div>
                        <div>Color</div>
                        <div>{props.bicycle.data.color}</div>
                        <div>Speeds_count</div>
                        <div>{props.bicycle.data.speeds_count}</div>
                        <div>Pedals</div>
                        <div>{props.bicycle.data.pedals}</div>
                        <div>Brakes</div>
                        <div>{props.bicycle.data.brakes}</div>
                        <div>Shock_absorber</div>
                        <div>{props.bicycle.data.shock_absorber}</div>
                        <div>Wheel</div>
                        <div>{props.bicycle.data.wheel}</div>
                        <div>Frame_size</div>
                        <div>{props.bicycle.data.frame_size}</div>
                        <div>Rider_height</div>
                        <div>{props.bicycle.data.rider_height}</div>
                    </div>

                    {token ? (
                        <div>
                            {props.favourites.data.find(fav => fav.product_id === props.bicycleId) ? (
                                <HeartFilled onClick={() => props.deleteFavourite(props.bicycleId)} />
                            ) : (
                                <HeartOutlined onClick={() => props.createFavourite(props.bicycleId)} />
                            )}
                        </div>
                    ) : (
                        ''
                    )}

                    <div>
                        <TextArea rows={4} onChange={e => setMessage(e.target.value)} />
                        <Button
                            placeholder={'Text message'}
                            onClick={() => {
                                const data = {
                                    host_uid: props.bicycle.data.user_id,
                                    message,
                                }

                                props.createMessage(data)
                            }
                        }>Send message</Button>
                    </div>
                    <div><Button onClick={() => props.createOrder(props.bicycle.data._id)}>Buy</Button></div>
                </>
            ) : (
                <SimpleLoader />
            )}
        </div>
    )
}

export default bicycle