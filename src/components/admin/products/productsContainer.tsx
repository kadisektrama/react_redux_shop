import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'

import Products from './products'
import { TProductData } from '../../../types/types'
import { AppStateType } from '../../../redux/redux-store'
import { admin } from '../../../redux/reducers/product-reducer'

const { getProducts } = admin

type TMapStateToProps = {
    products: TProductData
}

type TMapDispatchToProps = {
    getProducts: () => void
}

const ProductsContainer: React.FC<TMapStateToProps & TMapDispatchToProps> = (props) => {
    const [isLoaded, setIsLoaded] = useState<boolean>(false)

    useEffect(() => {
        Promise.all([props.getProducts()])
            .then(() => setIsLoaded(true))
    }, [])

    return (
        <Products
            isLoaded={isLoaded}
            products={props.products}
        />
    )
}

const mapStateToProps = (state: AppStateType) => {
    return ({
        products: state.product.products
    })
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, { getProducts })
)(ProductsContainer)