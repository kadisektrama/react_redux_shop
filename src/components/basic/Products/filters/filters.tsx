import React from 'react'

import { StarOutlined, BorderlessTableOutlined } from '@ant-design/icons'
import { InputNumber, Button, Slider, Typography } from 'antd'
import { TSearchModel } from './filtersContainer'
import { Common } from './common/common'
import { ProductType } from './productType/productType'
import { Search } from './search/search'

const { Title } = Typography

type TCustomParams = {
    searchModel: TSearchModel,
    onChange: (field: string) => (value: number | null) => void,
    onChangeSlider: (value: number[]) => void,
    search: () => void,
}

const filters: React.FC<TCustomParams> = (props) => {
    return (
        //      <div style={{ display: 'flex', padding: '16px', gap: '50px' }}>
        //         <div style={{ display: 'flex', gap: '10px' }}>
        //             <Button>Filters</Button>
        //             <Button>Type of product</Button>
        //         </div>

        //         <Search placeholder="input search text" onSearch={onSearch} enterButton />
        //      </div>
        <div style={{ display: 'flex', padding: '16px', gap: '50px' }}>
            <div style={{ display: 'flex', gap: '10px' }}>
                <Common />
                <ProductType />
            </div>

            <Search />
        </div>
        // <div style={{ margin: '16px', display: 'flex', rowGap: '16px', flexDirection: 'column'}}>
        //     <Title level={4}>Filters</Title>
        //     <Slider range min={0} max={150} tooltip={{ open: true }} defaultValue={[props.searchModel['price[lte]'], props.searchModel['price[gte]']]} onChange={props.onChangeSlider} />
        //     <InputNumber style={{ width: '100%' }} prefix={<StarOutlined />} min={0} max={10} defaultValue={props.searchModel['rating[gte]']} onChange={props.onChange('rating[gte]')} />
        //     <InputNumber style={{ width: '100%' }} prefix={<BorderlessTableOutlined />} min={0} max={10} defaultValue={props.searchModel['reviews_count[gte]']} onChange={props.onChange('reviews_count[gte]')} />
        //     <Button type="primary" onClick={props.search}>Search</Button>
        // </div>
    )
}

export default filters