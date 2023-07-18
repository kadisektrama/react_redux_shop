import React from 'react'

import { TCategoryDataSingle } from '../../../../types/types'
import SimpleLoader from '../../../common/loader'

type TMapStateToProps = {
    category: TCategoryDataSingle,
    isLoaded: boolean,
}

const view: React.FC<TMapStateToProps> = (props) => {
    return (
        <>
            {props.isLoaded ? (
                <div className="admin-view">
                    <div>Id</div>
                    <div>{props.category.data._id}</div>
                    <div>Title</div>
                    <div>{props.category.data.title}</div>
                    <div>Description</div>
                    <div>{props.category.data.description}</div>
                    <div>DB name</div>
                    <div>{props.category.data.db_name}</div>
                </div>
            ) : (
                <SimpleLoader />
            )}
        </>
    )
}

export default view