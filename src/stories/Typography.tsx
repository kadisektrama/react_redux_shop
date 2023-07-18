import React from 'react'
import './typography.css'

interface TypographyProps {
	/**
	 * Is this the principal call to action on the page?
	 */
	component?: string
	/**
	 * What background color to use
	 */
	backgroundColor?: string
	/**
	 * How large should the button be?
	 */
	size?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
	/**
	 * Button contents
	 */
    fontWeight?: string
	label: string
	/**
	 * Optional click handler
	 */
    /**
     * Font weight of component
     */

	onClick?: () => void
}

/**
 * Primary UI component for user interaction
 */
export const Typography = ({
	component = 'div',
	size = 'h2',
    fontWeight = '500',
	backgroundColor,
	label,
	...props
}: TypographyProps) => {
    const CustomTag = `${component || 'div'}` as keyof JSX.IntrinsicElements
	
	return (
		<CustomTag
			className={['storybook-typography', `storybook-typography--${size}`].join(' ')}
			style={{ backgroundColor, fontWeight: fontWeight }}
			{...props}
		>
			{label}
		</CustomTag>
	)
}
