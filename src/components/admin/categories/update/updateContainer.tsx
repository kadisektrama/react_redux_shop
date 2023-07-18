import React, { useState, useEffect, ComponentType } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

import Update from './update'
import { TCategory, TCategoryDataSingle } from '../../../../types/types'
import { AppStateType } from '../../../../redux/redux-store'
import { admin } from '../../../../redux/reducers/category-reducer'

const { updateCategory, getCategory } = admin

type TDispatchProps = {
    getCategory: (categoryId: string) => void,
    updateCategory: (categoryId: string, body: TCategory) => void
}

type TMapProps = {
    isLoaded: boolean,
    category: TCategoryDataSingle
}

type TUseParams = {
    categoryId: string
}

const CreateBookContainer: React.FC<TMapProps & TDispatchProps> = (props) => {
    const [isLoaded, setIsLoaded] = useState<boolean>(false)
    const navigate = useNavigate()
    const { categoryId } = useParams<TUseParams>()

    const updateBook = async (categoryId: string, body: TCategory) => {
        await props.updateCategory(categoryId, body)
        navigate('/admin/categories')
    }

    useEffect(() => {
        Promise.all([props.getCategory(categoryId!)])
            .then(() => setIsLoaded(true))
    }, [])

    return (
        <>
            {isLoaded && (
                <Update
                    categoryId={categoryId!}
                    updateCategory={(categoryId: string, body: TCategory) => updateBook(categoryId, body)}
                    isLoaded={isLoaded}
                    category={props.category}
                />
            )}
        </>
    )
}

const mapStateToProps = (state: AppStateType) => {
    return ({
        category: state.category.category,
    })
}

export default compose<ComponentType>(
    connect(mapStateToProps, { getCategory, updateCategory })
)(CreateBookContainer)

