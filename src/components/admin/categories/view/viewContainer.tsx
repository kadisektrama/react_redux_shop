import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { useParams } from 'react-router-dom'

import { AppStateType } from '../../../../redux/redux-store'
import { admin } from '../../../../redux/reducers/category-reducer'
import { TCategoryDataSingle } from '../../../../types/types'
import View from './view'

const { getCategory } = admin

type TMapStateToProps = {
    category: TCategoryDataSingle
}

type TMapDispatchToProps = {
    getCategory: (categoryId: string) => void
}

type TUseParams = {
    categoryId: string
}

const ViewContainer: React.FC<TMapStateToProps & TMapDispatchToProps> = (props) => {
    const [isLoaded, setIsLoaded] = useState<boolean>(false)
    const { categoryId } = useParams<TUseParams>()

    useEffect(() => {
        Promise.all([props.getCategory(categoryId!)])
            .then(() => setIsLoaded(true))
    }, [])

    return (
        <View
            isLoaded={isLoaded}
            category={props.category}
        />
    )
}

const mapStateToProps = (state: AppStateType) => {
    return ({
        category: state.category.category
    })
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, { getCategory })
)(ViewContainer)