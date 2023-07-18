import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import { Menu } from 'antd'
import { UnorderedListOutlined, UserOutlined, BookOutlined, HeartOutlined, PoundCircleOutlined, DatabaseOutlined } from '@ant-design/icons'

const App: React.FC = () => {
    const location = useLocation()

    return (
        <>
            <Link to={'/'}><div className="logo" /></Link>
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={[location.pathname.split('/')[2]]}
                items={[
                    {
                        key: 'users',
                        icon: <UserOutlined />,
                        label: <Link to={'/admin/users'}>Users</Link>,
                    },
                    {
                        key: 'categories',
                        icon: <UnorderedListOutlined />,
                        label: <Link to={'/admin/categories'}>Categories</Link>,
                    },
                    {
                        key: 'products',
                        icon: <DatabaseOutlined />,
                        label: <Link to={'/admin/products'}>Products</Link>,
                    },
                    {
                        key: 'books',
                        icon: <BookOutlined />,
                        label: <Link to={'/admin/books'}>Books</Link>,
                    },
                    {
                        key: 'bicycles',
                        icon: <HeartOutlined />,
                        label: <Link to={'/admin/bicycles'}>Bicycles</Link>,
                    },
                    {
                        key: 'orders',
                        icon: <HeartOutlined />,
                        label: <Link to={'/admin/favourites'}>Orders</Link>,
                    },
                    {
                        key: 'currencies',
                        icon: <PoundCircleOutlined />,
                        label: <Link to={'/admin/currencies'}>Currencies</Link>,
                    },
                ]}
            />
        </>
    )
}

export default App