import React from 'react'

type TMapStateProps = {
    images: any
}

export const Images: React.FC<TMapStateProps> = React.memo(function Images({ images }) {
    console.log(images)

    return (
        <div>

        </div>
    )
})