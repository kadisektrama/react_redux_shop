import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'

import Bicycles from './bicycles'
import { AppStateType } from '../../../redux/redux-store'
import { TBicycleData } from '../../../types/types'
import { admin } from '../../../redux/reducers/bicycle-reducer'

const { getBicycles, deleteBicycle } = admin

type TMapProps = {
    bicycles: TBicycleData
}

export type TDispatchProps = {
    getBicycles: () => void,
    deleteBicycle: (bicycleId: string) => void
}

const BooksContainer: React.FC<TMapProps & TDispatchProps> = (props) => {
    const [isLoaded, setIsLoaded] = useState<boolean>(false)

    useEffect(() => {
        Promise.all([props.getBicycles()])
            .then(() => setIsLoaded(true))
    }, [])

    return <Bicycles
        isLoaded={isLoaded}
        bicycles={props.bicycles}
        deleteBicycle={props.deleteBicycle}
    />
}

const mapStateToProps = (state: AppStateType) => {
    return ({
        bicycles: state.bicycle.bicycles,
    })
}

export default compose<React.ComponentType> (
    connect(mapStateToProps , { getBicycles, deleteBicycle })
)(BooksContainer)

