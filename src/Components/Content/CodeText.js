import React from 'react'

const CodeText = ({ children, id, className }) => {
    return (
        <p id={id} className={`${className} inline leading-7  bg-codeBg pl-2 pr-4 text-xs text-codeText border border-codeText rounded  w-max`}>
            <code>{children}</code>
        </p>
    )
}
export const CodeTextAsh = ({ children, id, className }) => {
    return (
        <p id={id} className={`${className} inline pl-2 pr-4 text-xs border-gray-400  bg-grey_1 text-codeText border rounded my-4 w-max`}>
            <code>{children}</code>
        </p>
    )
}

export default CodeText
