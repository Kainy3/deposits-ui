import React from 'react'

export const Heading3 = ({children, id, className}) => {
    return (
        <h3 id={id} className={`${className} font-face-hn font-semibold text-2xl my-4 capitalize`}>
            {children}
        </h3>
    )
}
export const Heading4 = ({children, id, className}) => {
    return (
        <h3 id={id} className={`${className} font-face-hn font-semibold text-xl my-4`}>
            {children}
        </h3>
    )
}

