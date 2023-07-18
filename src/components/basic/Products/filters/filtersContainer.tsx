import React, { useState } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { useSearchParams } from 'react-router-dom'

import Filters from './filters'
import { common } from '../../../../redux/reducers/product-reducer'

const { getProducts } = common

export type TSearchModel = typeof FiltersContainer.prototype.searchModel
type TMapDispatchToProps = {
    getProducts: (body: any) => void
}

const FiltersContainer: React.FC<TMapDispatchToProps> = (props) => {
    const [searchParams, setSearchParams] = useSearchParams()
    const [searchModel, setSearchModel] = useState({
        'price[gte]': searchParams.get('price[gte]') || 0 as number | undefined,
        'price[lte]': searchParams.get('price[lte]') || 150 as number | undefined,
        'rating[gte]': searchParams.get('rating') || 0,
        'reviews_count[gte]': searchParams.get('reviews_count') || 0,
    })

    const onChange = (field: string) => (value: number | null) => {
        setSearchModel({...searchModel, [field]: value})
    }

    const onChangeSlider = (value: number[]) => {
        setSearchModel({...searchModel, 'price[gte]': value.at(0), 'price[lte]': value.at(1)})
    }

    const search = () => {
        const urlSearch = new URLSearchParams(searchModel as any) // TODO
        setSearchParams(urlSearch)
        props.getProducts(searchModel)
    }

    return (
        <Filters
            searchModel={searchModel}
            onChange={onChange}
            onChangeSlider={onChangeSlider}
            search={search}
        />
    )
}

export default compose<React.ComponentType>(
    connect(null, { getProducts })
)(FiltersContainer)