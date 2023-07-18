import React from 'react'

import { TProduct, TProductData } from '../../../types/types'
import SimpleLoader from '../../common/loader'
import { Button, Table } from 'antd'
import { Link } from 'react-router-dom'
import { ColumnsType } from 'antd/es/table'

type TMapStateToProps = {
    isLoaded: boolean,
    products: TProductData
}

const products: React.FC<TMapStateToProps> = (props) => {
    const columns: ColumnsType<TProduct> = [
        {
            title: 'Title',
            dataIndex: '',
            key: 'title',
            render: (data) => <>
                <Link to={`/admin/${data.__t}/${data._id}/view`}>
                    {data.title}
                </Link>
            </>,
        },
        {
            title: 'description',
            dataIndex: 'description',
            key: 'description',
        },
        {
          title: '__t',
          dataIndex: '__t',
          key: '__t',
        },
        {
            title: 'rating',
            dataIndex: 'rating',
            key: 'rating',
        },
        {
            title: 'reviews_count',
            dataIndex: 'reviews_count',
            key: 'reviews_count',
        },
        {
            title: 'price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'currency',
            dataIndex: '',
            key: 'currency',
            render: (data) => <>{data.currency.name}</>,
        },
    ]

    return (
        <div>
            {props.isLoaded ? (
                <Table columns={columns} dataSource={props.products.data} />
            ) : (
                <SimpleLoader />
            )}
        </div>
    )
}

export default products