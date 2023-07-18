import React from 'react'

import { TCurrencyDataSingle } from '../../../../types/types'
import SimpleLoader from '../../../common/loader'

type TMapStateToProps = {
    currency: TCurrencyDataSingle,
    isLoaded: boolean,
}

const view: React.FC<TMapStateToProps> = (props) => {
    return (
        <>
            {props.isLoaded ? (
                <div className="admin-view">
                    <div>Id</div>
                    <div>{props.currency.data._id}</div>
                    <div>Title</div>
                    <div>{props.currency.data.name}</div>
                </div>
            ) : (
                <SimpleLoader />
            )}
        </>
    )
}

export default view