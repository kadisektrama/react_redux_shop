import Filters from './filters'
import { render, screen } from "@testing-library/react"
import { TSearchModel } from "@components/basic/Products/filters/filtersContainer"

describe('BASIC Products->filters', () => {
    const searchModel: TSearchModel = {
        'price[gte]': 0,
        'price[lte]': 150,
        'rating[gte]': 0,
        'reviews_count[gte]': 0,
    }
    const onChange = jest.fn()
    const onChangeSlider = jest.fn()
    const search = jest.fn()

    it('view', () => {
        render(<Filters searchModel={searchModel} onChange={onChange} onChangeSlider={onChangeSlider} search={search} />)

        expect(screen.getByText('Filters')).toBeInTheDocument()
    })
})