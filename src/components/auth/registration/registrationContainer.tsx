import React, { useState } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Registration from './registration'

import { TRegistration } from '../../../types/types'
import { authApi } from '../../../api/common/auth-api'

const BookContainer: React.FC = () => {
    const [error, setError] = useState<boolean>(false)
    const navigate = useNavigate()

    const register = async (body: TRegistration) => {
        const response = await authApi.register(body)

        if (response.status === 201) {
            document.cookie = `token=${response.data.token}; path=/`
            navigate('/')
        } else {
            setError(true)
        }
    }

    return <Registration
        register={register}
    />
}

export default compose<React.ComponentType>(
    connect(null, null)
)(BookContainer)