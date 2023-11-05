import React from 'react'
import { Link } from 'react-router-dom'

const header: React.FC = () => {
    return (
        <div style={{ display: 'flex', height: '64px', alignItems: 'center', margin: '0 30px 0 30px' }}>
            <Link to={'/'}><span style={{ fontSize: '30px' }}>SLAANESh</span></Link>
        </div>
    )
}

export default header