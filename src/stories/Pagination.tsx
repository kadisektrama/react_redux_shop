import React from 'react'
import cn from 'classnames'

import { RightOutlined, LeftOutlined } from '@ant-design/icons'

import './pagination.css'

interface PaginationProps {
	currentPage?: number,
    pageSize?: number,
    pageSizeValues?: number[],
    itemRender?: React.FC<{ value: any }>,
    showQuickJumper?: boolean,
    showSizeChanger?: boolean,
    showTitle?: boolean,
    showTotal?: boolean,
    size?: 'small' | 'medium' | 'big',
    total?: number,
    title?: string,
    onChange?: (args?: any) => void,
    onShowSizeChange?: (args?: any) => void,
}

/**
 * Primary UI component for user interaction
 */

type TMapToPropsItemRender = {
    value: number,
    onClick?: (value?: any) => void
}

const CellRender: React.FC<TMapToPropsItemRender> = ({value}) => {
    return (
        <div key={value} style={{ cursor: 'pointer' }}>{value}</div>
    )
}

type TMapStateToPropsIconButton = {
    children: React.ReactNode,
    size?: number,
    disabled?: boolean,
    style?: object,
    onClick: (value?: any) => void,
}

const IconButton: React.FC<TMapStateToPropsIconButton> = ({
    children, 
    size = 16,
    onClick,
    disabled = false,
    style = {},
}) => {
    return (
        <button disabled={disabled} onClick={() => onClick()} style={{ border: 0, cursor: 'pointer', width: `${size}px`, height: `${size}px`, borderRadius: `${size}px`, ...style }}>{children}</button>
    )
}

type TMapStateToPropsSelect = {
    value: number,
    values: number[],
    onChange?: (value: number | string) => void
}

const Select: React.FC<TMapStateToPropsSelect> = ({value, values, onChange}) => {
    return (
        <>
            <select name="pets" value={value} id="pet-select" onChange={(event: React.ChangeEvent<HTMLSelectElement>) => onChange && onChange(event.target.value)}>
                {values.map(i => <option key={i} value={i}>{i}</option>)}
            </select>
        </>
    )
}

const NativeCell: React.FC<{value: any}> = (props) => {
    return (
        <div>{props.value}</div>
    )
}

export const Pagination = ({
	currentPage = 1,
    pageSize = 10,
    pageSizeValues = [10, 20, 30],
    showQuickJumper = false,
    showSizeChanger = false,
    itemRender = NativeCell,
    showTitle = false,
    showTotal = false,
    size = 'medium',
    title = 'Title',
    total = 10,
    //onChange: (value) => console.log(value),
}: PaginationProps) => {
    const [page, setPage] = React.useState(currentPage)
    const [pageSizeValue, setPageSizeValueValue] = React.useState(pageSize)
    const cellCount = Math.ceil(total / pageSizeValue)
    const NodeCell = itemRender

    const countObjLastPage = total - ((page - 1) * pageSizeValue) // Calculate count of obj on last page
    const currentCountObjPage = countObjLastPage > pageSizeValue ? pageSizeValue : countObjLastPage // Calculate count of obj each page

	return (
        <>
            {showTitle && <div>{title}</div>}
            {showTotal && <div>Total {currentCountObjPage} of {total}</div>}
            
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <IconButton disabled={page === 1} onClick={() => setPage(prev => --prev)} size={40}><LeftOutlined /></IconButton>
                {Array.from({length: cellCount}, (_, i) => i + 1).map(i => <div className={cn('cell', `selected-cell-${size}`, {'selected-cell': i === page})} key={i} onClick={() => setPage(i)}><NodeCell value={i} /></div>)}
                <IconButton disabled={page === cellCount} onClick={() => setPage(prev => ++prev)} size={40}><RightOutlined /></IconButton>

                {showQuickJumper && <Select value={page} values={Array.from({length: cellCount}, (_, i) => i + 1)} onChange={(value) => setPage(+value)} />}
                {showSizeChanger && <Select value={pageSizeValue} values={pageSizeValues} onChange={(value) => setPageSizeValueValue(+value)} />}
            </div>
        </>
	)
}