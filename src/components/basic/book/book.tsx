import React from 'react'
import cookie from 'cookie'

import { Button, Input } from 'antd'

import { TBookDataSingle, TFavouriteData, TUserDataSingle } from '@typess/types'
import SimpleLoader from '../../common/loader'
import { HeartFilled, HeartOutlined } from '@ant-design/icons'
import { Images } from './images/images'

const { TextArea } = Input
const { token } = cookie.parse(document.cookie)

type TMapStateProps = {
    isLoaded: boolean,
    book: TBookDataSingle,
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
    bookId: string
}

const book: React.FC<TMapStateProps & TDispatchToProps & TCustomParams> = (props) => {
    const [message, setMessage] = React.useState('')

    const memoizedImages = React.useMemo(() => {
        return props.book.data?.images
    }, [props.isLoaded])

    // TODO useMemo
    return (
        <div>
            {props.isLoaded ? (
                <>
                    <Images images={memoizedImages} />
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
                        <div>Title</div>
                        <div>{props.book.data.title}</div>
                        <div>Description</div>
                        <div>{props.book.data.description}</div>
                        <div>Price</div>
                        <div>{props.book.data.price}</div>
                        <div>Author</div>
                        <div>{props.book.data.author}</div>
                    </div>

                    {token ? (
                        <div>
                            {props.favourites.data.find(fav => fav.product_id === props.bookId) ? (
                                <HeartFilled onClick={() => props.deleteFavourite(props.bookId)} />
                            ) : (
                                <HeartOutlined onClick={() => props.createFavourite(props.bookId)} />
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
                                    host_uid: props.book.data.user_id,
                                    message,
                                }

                                props.createMessage(data)
                            }
                            }>Send message</Button>
                    </div>
                    <div><Button onClick={() => props.createOrder(props.book.data._id)}>Buy</Button></div>
                </>
            ) : (
                <SimpleLoader />
            )}
        </div>
    )
}

export default book