import React from 'react'
import { Link } from 'react-router-dom'

import { Table, Button, Popconfirm  } from 'antd'
import type { ColumnsType, TableProps } from 'antd/es/table'

import SimpleLoader from '../../common/loader'
import { TBicycleData,  TBicycle } from '../../../types/types'

const onChange: TableProps<TBicycle>['onChange'] = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra)
}

type TMapProps = {
    isLoaded: boolean,
    bicycles: TBicycleData,
}

type TMapDispatchToProps = {
    deleteBicycle: (bicycleId: string) => void
}

const books: React.FC<TMapProps & TMapDispatchToProps> = (props) => {
    const columns: ColumnsType<TBicycle> = [
        {
            title: 'Title',
            dataIndex: '',
            key: 'title',
            render: (data) => <>
                <Link to={`/admin/bicycles/${data._id}/view`}>
                    {data.title}
                </Link>
            </>,
        },
        {
            title: 'description',
            dataIndex: 'description',
            /*sorter: {
                compare: (a, b) => a.chinese - b.chinese,
                multiple: 3,
            },*/
        },
        {
            title: 'rating',
            dataIndex: 'rating',
        },
        {
            title: 'reviews_count',
            dataIndex: 'reviews_count',
        },
        {
            title: 'price',
            dataIndex: 'price',
        },
        {
            title: 'currency',
            dataIndex: '',
            key: 'currency',
            render: (data) => <>{data.currency.name}</>,
        },
        {
            title: 'Actions',
            dataIndex: '',
            key: 'x',
            render: (data) => <>
                <Link style={{ marginRight: 8 }} to={`/admin/bicycles/${data._id}/update`}>Update</Link>
                <Popconfirm
                    placement="top"
                    title={'Deleting'}
                    description={"Are you sure that you want to delete bicycle?"}
                    onConfirm={() => props.deleteBicycle(data._id)}
                    okText="Yes"
                    cancelText="No"
                >
                    <Link to={`/admin/bicycles/${data._id}/delete`}>Delete</Link>
                </Popconfirm>
            </>,
        },
    ]

    return (
        <div>
            {props.isLoaded ? (
                    <>
                        <Link to={'/admin/bicycles/create'}>
                            <Button type="primary" style={{ marginBottom: 16 }}>
                                Add bicycle
                            </Button>
                        </Link>

                        <Table columns={columns} dataSource={props.bicycles.data} onChange={onChange} />
                    </>
                ) :
                <SimpleLoader />
            }
        </div>
    )
}

export default books