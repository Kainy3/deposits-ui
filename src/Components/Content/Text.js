import React from 'react'

const Text = ({ children, id, className }) => {
    return (
        <p id={id} className={`${className} leading-7 text-sm my-4`}>
            {children}
        </p>
    )
}

export default Text
