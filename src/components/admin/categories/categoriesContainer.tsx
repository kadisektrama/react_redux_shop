import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'

import Categories from './categories'
import { AppStateType } from '../../../redux/redux-store'
import { TCategoryData } from '../../../types/types'
import { admin } from '../../../redux/reducers/category-reducer'

const { getCategories, deleteCategory } = admin

type TMapProps = {
    categories: TCategoryData
}

export type TDispatchProps = {
    getCategories: () => void,
    deleteCategory: (categoryId: string) => void
}

const BooksContainer: React.FC<TMapProps & TDispatchProps> = (props) => {
    const [isLoaded, setIsLoaded] = useState<boolean>(false)

    useEffect(() => {
        Promise.all([props.getCategories()])
            .then(() => setIsLoaded(true))
    }, [])

    return <Categories
        isLoaded={isLoaded}
        categories={props.categories}
        deleteCategory={props.deleteCategory}
    />
}

const mapStateToProps = (state: AppStateType) => {
    return ({
        categories: state.category.categories,
    })
}

export default compose<React.ComponentType> (
    connect(mapStateToProps , { getCategories, deleteCategory })
)(BooksContainer)

