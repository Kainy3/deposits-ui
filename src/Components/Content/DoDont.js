import React from 'react'
import image4 from '../../Assets/Foundations/Accessability/Group7466.svg'
import image5 from '../../Assets/Foundations/Accessability/Group7465.svg'


export const Dont = ({text}) => {
    return (
        <div style={{ backgroundColor: '#FFEBE6' }}  className='flex-1 border-red-500 border-b-4 pl-5 pr-3 pb-10 rounded'>
            <div className='flex pb-3 pt-4 space-x-1'><img className='h-4 w-4' src={image4} alt="" /> <p className='uppercase font-face-hn font-semibold'>dont</p></div>
            <div><p className='pl-5 '>{text} </p></div>
        </div>
    )
}

export const Do = ({ text })  => {
    return (
        <div style={{ backgroundColor:'#E3FCEF'}} className='flex-1 bg-green-200 border-green-600 border-b-4 pl-5 pr-3 pb-10 rounded'>
            <div className='flex pb-3 pt-4 space-x-1'><img className='h-4 w-4' src={image5} alt="" /> <p className='uppercase font-face-hn  font-semibold'>Do</p></div>
            <div><p className='pl-5 text-header'>{text}</p></div>
        </div>
    )
}

