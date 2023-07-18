import { Outlet } from 'react-router-dom'
import React, { useState, useEffect } from 'react'

const layout: React.FC = () => {
    const [isLoaded, setIsLoaded] = useState<boolean>(false)

    useEffect(() => {
        setIsLoaded(true)
    }, [])

    return (
        <>
            {isLoaded && <Outlet />}
        </>
    )
}

export default layout