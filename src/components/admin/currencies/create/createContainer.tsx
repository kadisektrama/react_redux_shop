import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Create from './create'
import { TCurrency } from '../../../../types/types'
import { admin } from '../../../../redux/reducers/currency-reducer'

const { createCurrency } = admin

type TDispatchProps = {
    createCurrency: (body: TCurrency) => void
}

const CreateContainer: React.FC<TDispatchProps> = (props) => {
    const navigate = useNavigate()
    const createCategory = async (body: TCurrency) => {
        Promise.all([props.createCurrency(body)])
            .then(() => navigate('/admin/currencies'))
    }

    return (
        <Create
            createCurrency={(body: TCurrency) => createCategory(body)}
        />
    )
}

export default compose(
    connect(null, { createCurrency })
)(CreateContainer)

