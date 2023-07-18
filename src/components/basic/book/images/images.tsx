import React from 'react'

type TMapStateProps = {
    images: any
}
{/* eslint-disable react/prop-types */}
export const Images = React.memo<TMapStateProps>(function images({ images }) {
    console.log(images)

    return (
        <div>

        </div>
    )
})