import React, { useState, useEffect } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'

import { AppStateType } from '../../../redux/redux-store'
import Products from './products'
import { common } from '../../../redux/reducers/product-reducer'
import { useSearchParams } from 'react-router-dom'

const { getProducts } = common

type TMapProps = ReturnType<typeof mapStateToProps>

export type TDispatchProps = {
    getProducts: (body: any) => void
}

const ProductsContainer: React.FC<TMapProps & TDispatchProps> = (props) => {
    const [isLoaded, setIsLoaded] = useState<boolean>(false)
    const [searchParams] = useSearchParams()

    useEffect(() => {
        Promise.all([props.getProducts(Object.fromEntries([...searchParams as any]))])
            .then(() => setIsLoaded(true))
    }, [])

    return <Products
        isLoaded={isLoaded}
        products={props.products}
    />
}

const mapStateToProps = (state: AppStateType) => {
    return ({
        products: state.product.products,
    })
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, { getProducts })
)(ProductsContainer)