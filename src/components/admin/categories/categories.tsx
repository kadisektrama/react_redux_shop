import React from 'react'
import { Link } from 'react-router-dom'

import { Table, Button, Popconfirm  } from 'antd'
import type { ColumnsType, TableProps } from 'antd/es/table'

import SimpleLoader from '../../common/loader'
import { TCategoryData,  TCategory } from '../../../types/types'

const onChange: TableProps<TCategory>['onChange'] = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra)
}

type TMapProps = {
    isLoaded: boolean,
    categories: TCategoryData,
}

type TMapDispatchToProps = {
    deleteCategory: (categoryId: string) => void
}

const books: React.FC<TMapProps & TMapDispatchToProps> = (props) => {
    const columns: ColumnsType<TCategory> = [
        {
            title: 'title',
            dataIndex: '',
            key: 'title',
            render: (data: TCategory) => <>
                <Link to={`/admin/categories/${data._id}/view`}>{data.title}</Link>
            </>
        },
        {
            title: 'description',
            dataIndex: 'description',
        },
        {
            title: 'db_name',
            dataIndex: 'db_name',
        },
        {
            title: 'price',
            dataIndex: 'price',
        },
        {
            title: 'currency',
            dataIndex: 'currency',
        },
        {
            title: 'author',
            dataIndex: 'author',
        },
        {
            title: 'Actions',
            dataIndex: '',
            key: 'x',
            render: (data) => <>
                <Link style={{ marginRight: 8 }} to={`/admin/categories/${data._id}/update`}>Update</Link>
                <Popconfirm
                    placement="top"
                    title={'Deleting'}
                    description={"Are you sure that you want to delete category?"}
                    onConfirm={() => props.deleteCategory(data._id)}
                    okText="Yes"
                    cancelText="No"
                >
                    <Link to={`/admin/categories/${data._id}/delete`}>Delete</Link>
                </Popconfirm>
            </>,
        },
    ]

    return (
        <div>
            {props.isLoaded ? (
                    <>
                        <Link to={'/admin/categories/create'}>
                            <Button type="primary" style={{ marginBottom: 16 }}>
                                Add category
                            </Button>
                        </Link>

                        <Table columns={columns} dataSource={props.categories.data} onChange={onChange} />
                    </>
                ) :
                <SimpleLoader />
            }
        </div>
    )
}

export default books