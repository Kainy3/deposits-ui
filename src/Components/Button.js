import { Link } from 'react-router-dom'

export const Button1 = ({children, className, link}) => {
    return (
        <Link to={link}>
        <button className={`px-6 py-3 rounded bg-primary text-white  ${className}`}>
            {children}

        </button>
        </Link>
    )
}
export const Button2 = ({children, className, link}) => {
    return (
        <Link to={link}>

        <button className={`px-6 py-3 rounded text-primary border border-primary bg-white  ${className}`}>
            {children}
            </button>
            </Link>
    )
}

