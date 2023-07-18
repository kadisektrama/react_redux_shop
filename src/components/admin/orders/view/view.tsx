import React from 'react'
import { Link } from 'react-router-dom'

import { TOrderDataSingle } from '../../../../types/types'
import SimpleLoader from '../../../common/loader'

type TMapStateToProps = {
    order: TOrderDataSingle,
    isLoaded: boolean,
}

const view: React.FC<TMapStateToProps> = (props) => {
    return (
        <>
            {props.isLoaded ? (
                <div className="admin-view">
                    <div>Id</div>
                    <div>{props.order.data._id}</div>
                    <div>Status</div>
                    <div>{props.order.data.status}</div>
                    <div>Product ID</div>
                    <div><Link to={`/admin/${props.order.data.product_id.__t}/${props.order.data.product_id._id}/view`}>{props.order.data.product_id._id}</Link></div>
                    <div>User ID</div>
                    <div><Link to={`/admin/user/${props.order.data.user_id._id}/view`}>{props.order.data.user_id._id}</Link></div>
                </div>
            ) : (
                <SimpleLoader />
            )}
        </>
    )
}

export default view