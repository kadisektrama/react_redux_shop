import React from 'react'
import { Link } from 'react-router-dom'

import { TUser, TUserData } from '@typess/types'
import SimpleLoader from '../../common/loader'
import { Button, Popconfirm, Table } from 'antd'
import { ColumnsType } from 'antd/es/table'

type TMapStateToProps = {
    isLoaded: boolean,
    users: TUserData
}

type TMapDispatchToProps = {
    deleteUser: (userId: string) => void
}

const users: React.FC<TMapStateToProps & TMapDispatchToProps> = (props) => {
    const columns: ColumnsType<TUser> = [
        {
            title: 'First name',
            dataIndex: '',
            key: 'first_name',
            render: (data) => <>
                <Link to={`/admin/users/${data._id}/view`}>
                    {data.first_name}
                </Link>
            </>,
        },
        {
            title: 'last name',
            dataIndex: 'last_name',
            /*sorter: {
                compare: (a, b) => a.chinese - b.chinese,
                multiple: 3,
            },*/
        },
        {
            title: 'role',
            dataIndex: '',
            key: 'role',
            render: (data) => <>{data.role.name}</>
        },
        {
            title: 'email',
            dataIndex: 'email',
        },
        {
            title: 'phone',
            dataIndex: 'phone',
        },
        {
            title: 'Actions',
            dataIndex: '',
            key: 'x',
            render: (data) => <>
                <Link style={{ marginRight: 8 }} to={`/admin/users/${data._id}/update`}>Update</Link>
                <Popconfirm
                    placement="top"
                    title={'Deleting'}
                    description={"Are you sure that you want to delete user?"}
                    onConfirm={() => props.deleteUser(data._id)}
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
                    <Link to={'/admin/users/create'}>
                        <Button type="primary" style={{ marginBottom: 16 }}>
                            Add user
                        </Button>
                    </Link>

                    <Table columns={columns} dataSource={props.users.data} />
                </>
            ) : (
                <SimpleLoader />
            )}
        </div>
    )
}

export default users