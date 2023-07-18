import { connect } from 'react-redux'
import { compose } from 'redux'
import React, { useState, useEffect } from 'react'

import { AppStateType } from '../../../redux/redux-store'
import Categories from './categories'
import { TCategoryData } from '../../../types/types'
import { common } from '../../../redux/reducers/category-reducer'

const { getCategories } = common

type TMapStateProps = {
    categories: TCategoryData
}

export type TMapDispatchToProps = {
    getCategories: () => void
}

const CategoriesContainer: React.FC<TMapStateProps & TMapDispatchToProps> = (props) => {
    const [isLoaded, setIsLoaded] = useState<boolean>(false)

    useEffect(() => {
        Promise.all([props.getCategories()])
            .then(() => setIsLoaded(true))
    }, [])

    return <Categories
        isLoaded={isLoaded}
        categories={props.categories}
    />
}

const mapStateToProps = (state: AppStateType) => {
    return ({
        categories: state.category.categories
    })
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, { getCategories })
)(CategoriesContainer)