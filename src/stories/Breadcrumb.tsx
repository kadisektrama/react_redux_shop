import React from 'react'
import { Link } from 'react-router-dom'

import './button.css'

type TItem = {
    itemStyle?: React.CSSProperties,
    path: string,
    title: string,
    onClick?: (value?: any) => void
}

interface BreadcrumbProps {
	params?: string,
    items?: TItem[],
    separator?: React.ReactNode,
    style?: React.CSSProperties,
}

/**
 * Primary UI component for user interaction
 */

const insertIntoArray = (arr: any, value: any) => {

    return arr.reduce((result: any, element: any, index: any, array: any) => {

        result.push(element)

        if (index < array.length - 1) {
            result.push(value)
        }

        return result
    }, [])
}

export const Breadcrumb = ({
	params = '',
    items = [
        {
            title: 'Главная',
            path: '',
        },
        {
            title: 'Брест',
            path: '/brest',
        }, 
    ],
    separator = ' / ',
    style = { textDecoration: 'unset', color: 'grey' },
}: BreadcrumbProps) => {
	return (
		<div id="breadcrumb">
            {insertIntoArray(items.map((i, index) => <Link style={i.itemStyle ? i.itemStyle : style} key={index} to={`${params}${i.path}`}>{i.title}</Link>), separator)}
        </div>
	)
}
