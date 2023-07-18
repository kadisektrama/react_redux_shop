import type { Meta, StoryObj } from '@storybook/react'
import React, { Component }  from 'react'

import { Space } from './Space'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
	title: 'Example/Space',
	component: Space,
	tags: ['autodocs'],
	// argTypes: {
	// 	direction: { control: 'row' },
	// },
} satisfies Meta<typeof Space>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Gap2: Story = {
	args: {
		children: <><div>test1</div><div>test3</div></>,
		direction: 'row',
		gap: 2,
	},
}

export const Gap4: Story = {
	render: (args) => (
		<Space {...args}>
			<div>test1</div>
			<div>test2</div>
			<div>test3</div>
			<div>test4</div>
			<div>test5</div>
		</Space>
	),
}

export const Gap1: Story = {
	args: {
		children: `<><div>test1</div><div>test3</div><>`,
		direction: 'row',
		gap: 1,
	},
}

export const Gap3: Story = {
	args: {
		direction: 'row',
		gap: 1,
	},
}