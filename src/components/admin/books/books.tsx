import React from 'react'
import { Link } from 'react-router-dom'

import { Table, Button, Popconfirm  } from 'antd'
import type { ColumnsType, TableProps } from 'antd/es/table'

import SimpleLoader from '../../common/loader'
import { TBookData, TBook } from '../../../types/types'

const onChange: TableProps<TBook>['onChange'] = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra)
}

type TMapProps = {
    isLoaded: boolean,
    books: TBookData,
}

type TDispatchProps = {
    deleteBook: (bookId: string) => void
}

const books: React.FC<TMapProps & TDispatchProps> = (props) => {
    const columns: ColumnsType<TBook> = [
        {
            title: 'Title',
            dataIndex: '',
            key: 'title',
            render: (data) => <>
                <Link to={`/admin/books/${data._id}/view`}>
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
            title: 'author',
            dataIndex: 'author',
        },
        {
            title: 'Actions',
            dataIndex: '',
            key: 'x',
            render: (data) => <>
                <Link style={{ marginRight: 8 }} to={`/admin/books/${data._id}/update`}>Update</Link>
                <Popconfirm
                    placement="top"
                    title={'Deleting'}
                    description={"Are you sure that you want to delete book?"}
                    onConfirm={() => props.deleteBook(data._id)}
                    okText="Yes"
                    cancelText="No"
                >
                    <Link to={`/admin/books/${data._id}/delete`}>Delete</Link>
                </Popconfirm>
            </>,
        },
    ]

    return (
        <div>
            {props.isLoaded ? (
                <>
                    <Link to={'/admin/books/create'}>
                        <Button type="primary" style={{ marginBottom: 16 }}>
                            Add book
                        </Button>
                    </Link>

                    <Table columns={columns} dataSource={props.books.data} onChange={onChange} />
                </>
            ) :
                <SimpleLoader />
            }
        </div>
    )
}

export default books