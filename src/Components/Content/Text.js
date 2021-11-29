import React from 'react'

const Text = ({ children, id, className }) => {
    return (
        <p id={id} className={`${className} leading-7 text-sm`}>
            {children}
        </p>
    )
}

export default Text
