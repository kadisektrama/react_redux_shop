import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

import { Layout } from 'antd'

// Tools
import Header from './header/headerContainer'
import Footer from './footer/footer'
import './layout.scss'
import SimpleLoader from '../../common/loader'
import ErrorBoundary from '../../common/errorBoundary'

const layout = () => {
    return (
        <Layout style={{ display: "flex" }}>
            <header className='header-flex'>
                <Header />
            </header>
            <main className='main-flex'>
                <div className='content'>
                    <ErrorBoundary>
                        <Suspense fallback={<SimpleLoader />}>
                            <Outlet />
                        </Suspense>
                    </ErrorBoundary>
                </div>
            </main>
            <footer className='footer-flex'>
                <Footer />
            </footer>
        </Layout>
    )
}

export default layout