import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { useParams } from 'react-router-dom'

import { AppStateType } from '../../../../redux/redux-store'
import { admin } from '../../../../redux/reducers/bicycle-reducer'
import { TBicycleDataSingle } from '../../../../types/types'
import View from './view'

const { getBicycle } = admin

type TMapStateToProps = {
    bicycle: TBicycleDataSingle
}

type TMapDispatchToProps = {
    getBicycle: (categoryId: string) => void
}

type TUseParams = {
    bicycleId: string
}

const ViewContainer: React.FC<TMapStateToProps & TMapDispatchToProps> = (props) => {
    const [isLoaded, setIsLoaded] = useState<boolean>(false)
    const { bicycleId } = useParams<TUseParams>()

    useEffect(() => {
        Promise.all([props.getBicycle(bicycleId!)])
            .then(() => setIsLoaded(true))
    }, [])

    return (
        <View
            isLoaded={isLoaded}
            bicycle={props.bicycle}
        />
    )
}

const mapStateToProps = (state: AppStateType) => {
    return ({
        bicycle: state.bicycle.bicycle
    })
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, { getBicycle })
)(ViewContainer)