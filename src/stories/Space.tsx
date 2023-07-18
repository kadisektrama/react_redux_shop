import React from 'react'
import './space.css'

interface SpaceProps {
	/**
	 * Is this the principal call to action on the page?
	 */
	gap?: string | number
	/**
	 * What background color to use
	 */
	direction?: 'column' | 'row'
	/**
	 * How large should the button be?
	 */
    children?: React.ReactNode
}

/**
 * Primary UI component for user interaction
 */
export const Space = ({
	gap = '1',
    direction = 'column',
    children = <><div>test1</div><div>test2</div></>,
	...props
}: SpaceProps) => {
	
	return (
		<div
			className={'storybook-space'}
			style={{ flexDirection: direction, gap: `${gap}0px`  }}
			{...props}
		>
			{children}
		</div>
	)
}
