import React from 'react'
import { Link } from 'react-router-dom'

const header = () => {
    return (
        <div style={{ display: 'flex' }}>
            <Link to={'/'}>ЛОГО</Link>
        </div>
    )
}

export default header