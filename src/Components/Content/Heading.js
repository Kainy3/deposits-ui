import React from 'react'

export const Heading3 = ({children, id, small, className}) => {
    return (
        <h3 id={id} className={`${className || (small ? 'text-base':' text-2xl')} font-face-hn font-semibold my-4 capitalize`}>
            {children}
        </h3>
    )
}
export const Heading4 = ({children, id, small, className}) => {
    return (
        <h3 id={id} className={`${className || (small ? 'text-base' : ' text-xl')} font-face-hn font-semibold my-4`}>
            {children}
        </h3>
    )
}

