import React from 'react'
import { Link } from 'react-router-dom'

import { Table, Button, Popconfirm  } from 'antd'
import type { ColumnsType, TableProps } from 'antd/es/table'

import SimpleLoader from '../../common/loader'
import { TCurrencyData,  TCurrency } from '../../../types/types'

const onChange: TableProps<TCurrency>['onChange'] = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra)
}

type TMapProps = {
    isLoaded: boolean,
    currencies: TCurrencyData,
}

type TMapDispatchToProps = {
    deleteCurrency: (currencyId: string) => void
}

const books: React.FC<TMapProps & TMapDispatchToProps> = (props) => {
    const columns: ColumnsType<TCurrency> = [
        {
            title: '_id',
            dataIndex: '',
            key: '_id',
            render: (data) => <>
                <Link to={`/admin/currencies/${data._id}/view`}>{data._id}</Link>
            </>

        },
        {
            title: 'name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Actions',
            dataIndex: '',
            key: 'x',
            render: (data) => <>
                <Link style={{ marginRight: 8 }} to={`/admin/currencies/${data._id}/update`}>Update</Link>
                <Popconfirm
                    placement="top"
                    title={'Deleting'}
                    description={"Are you sure that you want to delete currency?"}
                    onConfirm={() => props.deleteCurrency(data._id)}
                    okText="Yes"
                    cancelText="No"
                >
                    <Link to={`/admin/currencies/${data._id}/delete`}>Delete</Link>
                </Popconfirm>
            </>,
        },
    ]

    return (
        <div>
            {props.isLoaded ? (
                    <>
                        <Link to={'/admin/currencies/create'}>
                            <Button type="primary" style={{ marginBottom: 16 }}>
                                Add currency
                            </Button>
                        </Link>

                        <Table columns={columns} dataSource={props.currencies.data} onChange={onChange} />
                    </>
                ) :
                <SimpleLoader />
            }
        </div>
    )
}

export default books