import type { Meta, StoryObj } from '@storybook/react'

import { Typography } from './Typography'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
	title: 'Example/Typography',
	component: Typography,
	tags: ['autodocs'],
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const H1: Story = {
	args: {
		label: 'Typography',
        size: 'h1',
	},
}

export const H2: Story = {
	args: {
		label: 'Typography',
        size: 'h2',
	},
}

export const H3: Story = {
	args: {
		label: 'Typography',
        size: 'h3',
	},
}

export const H4: Story = {
	args: {
		label: 'Typography',
        size: 'h4',
	},
}

export const H5: Story = {
	args: {
		label: 'Typography',
        size: 'h5',
	},
}

export const H6: Story = {
	args: {
		label: 'Typography',
        size: 'h6',
	},
}