import React from 'react'
import { Link } from 'react-router-dom'
import cookie from 'cookie'

import type { MenuProps } from 'antd'
import { Button, Avatar, Dropdown } from 'antd'
import { UserOutlined } from '@ant-design/icons'

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
        label: <Link to={'/guest/inbox'}><Button type="text">inbox</Button></Link>,
        key: 'inbox',
    },
    {
        label: <Link to={'/guest/settings'}><Button type="text">settings</Button></Link>,
        key: 'settings',
    },
    {
        type: 'divider',
    },
    {
        label: <div onClick={() => {
            document.cookie = 'token=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/'
            document.location = document.location.origin
        }}>logout</div>,
        key: 'logout',
    },
]

const header = () => {
    return (
        <div style={{ display: 'flex', height: '64px', alignItems: 'center', margin: '0 30px 0 30px' }}>
            <Link to={'/'}><span style={{ fontSize: '30px' }} >SLAANESh</span></Link>

            <div className='flex-justify-content-flex-end' style={{ width: '100%', margin: 0 }}>
                <div>
                    {cookies.token ? (
                        <>
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