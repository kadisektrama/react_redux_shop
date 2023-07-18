import React, { useState, useEffect } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'

import { AppStateType } from '../../../../redux/redux-store'
import Header from './header'
import { TUserDataSingle } from '../../../../types/types'

type TMapStateToProps = {
    user: TUserDataSingle
}

const HeaderContainer: React.FC<TMapStateToProps> = (props) => {
    return <Header
        user={props.user}
    />
}

const mapStateToProps = (state: AppStateType) => {
    return ({
        user: state.user.user,
    })
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, null)
)(HeaderContainer)