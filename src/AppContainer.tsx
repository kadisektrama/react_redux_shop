import React, { FC } from 'react'
import { compose } from 'redux'
import { Provider, connect } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

// Tools
import App from './App'
import { AppStateType } from './redux/redux-store'
import { setInitialize } from './redux/reducers/app-reducer'
import store from './redux/redux-store'

const AppContainer: FC = (props: any) => {
    return (
        <App />
    )
}

const mapStateToProps = (state: any) => {
    return {
        initialized: state.app.initialized
    }
}

const InternetShopReactExpess = compose<FC>(
    connect(mapStateToProps, {setInitialize}))(AppContainer)

const InternetShopReactExpessContainer: FC = () => {
    return (
        <Provider store={store}>
            <InternetShopReactExpess />
        </Provider>
    )
}

export default InternetShopReactExpessContainer