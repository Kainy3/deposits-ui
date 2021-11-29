import React from 'react'

export const Caption = ({ children, id, className, small }) => {
    return (
        <p id={id} className={`${(className) || (small && 'text-xs') } text-caption`}>
            {children}
        </p>
    )
}

export default Caption