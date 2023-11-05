import React from "react"
import { Input } from "antd"

const { Search: SearchAntd } = Input

export const Search: React.FC = () => {
    const onSearch = (value: string) => {
        console.log(value)
    }
    
    return (
        <SearchAntd placeholder="input search text" onSearch={onSearch} enterButton />
    )
}