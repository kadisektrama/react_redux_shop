import React from 'react'
import { Link } from 'react-router-dom'
import cookie from 'cookie'

import type { MenuProps } from 'antd'
import { Button, Space, Avatar, Dropdown } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { TUserDataSingle } from '../../../../types/types'

const cookies = cookie.parse(document.cookie)

const items: MenuProps['items'] = [
    {
        label: <Link to={'/guest/favourites'}><Button type="text">favourites</Button></Link>,
        key: 'favourites',
    },
    {
        label: <Link to={'/guest/orders'}><Button type="text">orders</Button></Link>,
        key: 'orders',
    },
    {
        label: <Link to={'/guest/settings'}><Button type="text">settings</Button></Link>,
        key: 'settings',
    },
    {
        label: <Link to={'/guest/inbox'}><Button type="text">inbox</Button></Link>,
        key: 'inbox',
    },
    {
        type: 'divider',
    },
    {
        label: <div onClick={() => {
            document.cookie = 'token=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/'
            document.location.reload()
        }}>logout</div>,
        key: 'logout',
    },
]

type TMapStateToProps = {
    user: TUserDataSingle
}

const header: React.FC<TMapStateToProps> = (props) => {
    return (
        <div style={{ display: 'flex', height: '64px', alignItems: 'center', margin: '0 30px 0 30px' }}>
            <Link to={'/'}><span style={{ fontSize: '30px' }} >SLAANESh</span></Link>

            <div className='flex-justify-content-space-between' style={{ width: '100%', margin: 0 }}>
                <Space size={10} style={{ marginLeft: '50px' }}>
                    <Link to={'/categories'}><Button type="text">catalog</Button></Link>
                    <span>search</span>
                </Space>

                <div>
                    {cookies.token ? (
                        <>
                            {props.user?.data?.role?.name === 'admin' && <Link style={{ marginRight: '24px' }} to={'/admin'}><Button type="text">admin</Button></Link>}
                            <Link style={{ marginRight: '24px' }} to={'/host'}><Button type="text">manage</Button></Link>

                            <Dropdown menu={{ items }} trigger={['click']}>
                                <Avatar style={{ cursor: 'pointer' }} icon={<UserOutlined />} />
                            </Dropdown>
                        </>
                    ) : (
                        <Link to={'/auth/login'}>login</Link>
                    )}
                </div>
            </div>
        </div>
    )
}

export default header