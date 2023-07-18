import React, {useState} from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'

import Login from './login'
import { TLogin } from '../../../types/types'
import { authApi } from '../../../api/common/auth-api'

const BookContainer: React.FC = () => {
    const [error, setError] = useState<boolean>(false)

    const login = async (body: TLogin) => {
        const response = await authApi.authenticate(body)

        if (response.status === 200) {
            document.cookie = `token=${response.data.token}; path=/`
            document.location = document.location.origin
        } else {
            setError(true)
        }
    }

    return <Login
        login={login}
    />
}

export default compose<React.ComponentType>(
    connect(null, null)
)(BookContainer)