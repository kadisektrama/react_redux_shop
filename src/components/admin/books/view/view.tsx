import React from 'react'

import { TBookDataSingle } from '../../../../types/types'
import SimpleLoader from '../../../common/loader'

type TMapStateToProps = {
    book: TBookDataSingle,
    isLoaded: boolean,
}

const view: React.FC<TMapStateToProps> = (props) => {
    return (
        <>
            {props.isLoaded ? (
                <div className="admin-view">
                    <div>Id</div>
                    <div>{props.book.data._id}</div>
                    <div>Title</div>
                    <div>{props.book.data.title}</div>
                    <div>Description</div>
                    <div>{props.book.data.description}</div>
                    <div>User ID</div>
                    <div>{props.book.data.user_id}</div>
                    <div>Author</div>
                    <div>{props.book.data.author}</div>
                    <div>Price</div>
                    <div>{props.book.data.price}</div>
                    <div>Currency</div>
                    <div>{props.book.data.currency.name}</div>
                    <div>Reviews count</div>
                    <div>{props.book.data.reviews_count}</div>
                    <div>Rating</div>
                    <div>{props.book.data.rating}</div>
                </div>
            ) : (
                <SimpleLoader />
            )}
        </>
    )
}

export default view