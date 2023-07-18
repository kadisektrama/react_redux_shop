import { create } from 'react-test-renderer'
import Products from './products'
import { TProductData } from "@typess/types"
import { render, screen } from "@testing-library/react"
import { MemoryRouter as Router } from 'react-router-dom'

const products: TProductData = {
    data: [
        {
            _id: "63fbe0960c8f6615a6b37b52",
            color: "red",
            speeds_count: 21,
            pedals: "shock-resistant",
            brakes: "disk (160mm)",
            shock_absorber: true,
            wheel: 26,
            frame_size: 16,
            rider_height: 170,
            title: "GIERN RD-06",
            description: "АКЦИЯ: Скидка -40%",
            price: 76900,
            currency: {
                _id: "63fd8ece19c41e57c725fa40",
                name: "BYN"
            },
            reviews_count: 5,
            rating: 5,
            __t: "bicycles",
            __v: 0,
            user_id: "6402796061dc36990c47fd3f",
            images: [
                {
                    url: "http://localhost:8080/images/1680211230224--s.png",
                    _id: "6425fd1e27e739e6ed44c774"
                },
                {
                    url: "http://localhost:8080/images/1680211217802--s (1).png",
                    _id: "6425fd1e27e739e6ed44c775"
                }
            ]
        }
    ]
}

jest.mock('./filters/filtersContainer', () =>  {
    const ComponentToMock = () => <div />
    return ComponentToMock
})

describe('BASIC Products', () => {
    it('Products is exist', () => {
        render(<Router><Products isLoaded={true} products={products} /></Router>)

        expect(screen.getByText('GIERN RD-06')).toBeInTheDocument()
        /*const component = create(<Products isLoaded={true} products={products} />)
        const root = component.root
        const styleComponents = root.findAllByType('div')
        console.log(styleComponents)
        expect(styleComponents.length).toBe(1)*/
    })
})