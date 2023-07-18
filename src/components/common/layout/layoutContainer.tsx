import React, { useEffect } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import cookie from 'cookie'

import Layout from './layout'
import { common } from '../../../redux/reducers/user-reducer'
import ErrorBoundary from '../../common/errorBoundary'

const { identify } = common

type TMapDispatchToProps = {
    identify: () => void
}

const { token } = cookie.parse(document.cookie)

const LayoutContainer: React.FC<TMapDispatchToProps> = (props) => {
    useEffect(() => {
        Promise.all([token && props.identify()])
    }, [])

    return (
        <ErrorBoundary>
            <Layout />
        </ErrorBoundary>
    )
}

export default compose<React.ComponentType>(
    connect(null, { identify })
)(LayoutContainer)
