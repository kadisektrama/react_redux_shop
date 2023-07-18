import React from 'react'
import { Link } from 'react-router-dom'

import { Table, Button, Popconfirm  } from 'antd'
import type { ColumnsType, TableProps } from 'antd/es/table'

import SimpleLoader from '../../common/loader'
import { TOrder, TOrderData } from '../../../types/types'

const onChange: TableProps<TOrder>['onChange'] = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra)
}

type TMapProps = {
    isLoaded: boolean,
    orders: TOrderData,
}

type TMapDispatchToProps = {
    deleteOrder: (orderId: string) => void
}

const books: React.FC<TMapProps & TMapDispatchToProps> = (props) => {
    const columns: ColumnsType<TOrder> = [
        {
            title: 'Title',
            dataIndex: '',
            key: 'title',
            render: (data) => <>
                <Link to={`/admin/orders/${data._id}/view`}>
                    {data.product_id.title}
                </Link>
            </>,
        },
        {
            title: 'price',
            dataIndex: '',
            key: 'price',
            render: (data) => <>{data.product_id.price / 1000}</>,
        },
        {
            title: 'currency',
            dataIndex: '',
            key: 'currency',
            render: (data) => <>{data.product_id.currency.name}</>,
        },
        {
            title: 'owner',
            dataIndex: '',
            key: 'owner',
            render: (data) => <>
                <Link to={`/admin/users/${data.user_id._id}/view`}>
                    {data.user_id.first_name}
                </Link>
            </>,
        },
        {
            title: 'status',
            dataIndex: 'status',
            key: 'status',
        },
        {
            title: 'Actions',
            dataIndex: '',
            key: 'x',
            render: (data) => <>
                <Link style={{ marginRight: 8 }} to={`/admin/orders/${data._id}/update`}>Update</Link>
                <Popconfirm
                    placement="top"
                    title={'Deleting'}
                    description={"Are you sure that you want to delete bicycle?"}
                    onConfirm={() => props.deleteOrder(data._id)}
                    okText="Yes"
                    cancelText="No"
                >
                    <Link to={`/admin/orders/${data._id}/delete`}>Delete</Link>
                </Popconfirm>
            </>,
        },
    ]

    return (
        <div>
            {props.isLoaded ? (
                    <>
                        <Table columns={columns} dataSource={props.orders.data} onChange={onChange} />
                    </>
                ) :
                <SimpleLoader />
            }
        </div>
    )
}

export default books