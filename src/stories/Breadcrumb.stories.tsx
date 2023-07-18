import type { Meta, StoryObj } from '@storybook/react'
import { withRouter } from 'storybook-addon-react-router-v6'
import React from 'react'

import { Breadcrumb } from './Breadcrumb'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
	title: 'Example/Breadcrumb',
	component: Breadcrumb,
    decorators: [withRouter],
	tags: ['autodocs'],
} satisfies Meta<typeof Breadcrumb>

export default meta
type Story = StoryObj<typeof meta>

const Default: any = {
    items: [
        {
            title: 'Главная',
            path: ''
        },
        {
            title: 'Брест',
            path: '/brest'
        }
    ],
    separator: ' / ',
    params: '/',
}

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Items3: Story = {
	args: {
		items: [
            {
                title: 'Главная',
                path: '/'
            },
            {
                title: 'Минск',
                path: '/minsk',
            },
            {
                title: 'Однокомнатные',
                path: '/odnokomnatnie',
                itemStyle: {
                    color: 'black',
                    textDecoration: 'unset' 
                }
            }
        ],
        separator: ' / ',
        params: '/',
	},
}

export const Items2: Story = {
	render: (args) => (
        <Breadcrumb {...Default} />
	),
}