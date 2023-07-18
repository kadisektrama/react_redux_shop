import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Create from './create'
import { TCategory } from '../../../../types/types'
import { admin } from '../../../../redux/reducers/category-reducer'

const { createCategory } = admin

type TDispatchProps = {
    createCategory: (body: TCategory) => void
}

const CreateContainer: React.FC<TDispatchProps> = (props) => {
    const navigate = useNavigate()
    const createCategory = async (body: TCategory) => {
        Promise.all([props.createCategory(body)])
            .then(() => navigate('/admin/categories'))
    }

    return (
        <Create
            createCategory={(body: TCategory) => createCategory(body)}
        />
    )
}

export default compose(
    connect(null, { createCategory })
)(CreateContainer)

