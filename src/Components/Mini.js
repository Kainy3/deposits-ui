import React from 'react'
import { Link } from 'react-router-dom'
import typography from '../Assets/Foundations/typography.svg'
import { componentData, foundationData } from '../Utils/Data'
import buttons from '../Assets/Components/buttons.svg'


export const Mini = ({ source, title, text }) => {
    return (
        <div className='flex text-xs justify-center space-x-3 p-5 shadow-sm bg-white'>
            <div>
                <div className='h-'>
                    <img className='h-full w-full' src={source} alt='' />
                </div>
            </div>
            <div className='my-auto space-y-2'>
                <div className='font-semibold text-sm capitalize '><h6>{title}</h6></div>
                <div>{text}</div>
                <button className='text-primary'>Learn More</button>
            </div>

        </div>
    )
}


export const MiniF = () => {
    let data = foundationData
    return (
        <div className='grid grid-cols-4 gap-8'>
            {
                data.slice(1, data.legth).map((item, index) => {
                    return (
                        <div key={index} className='h-44 flex flex-col shadow py-auto px-2 rounded text-xs items-center'>
                            <Link to={item.link} className="mx-auto my-auto space-y-2.5 overflow-auto ">
                                <div>
                                    <img src={typography} alt="" className="h-full w-max" />
                                </div>
                                <div className="capitalize font-semibold text-sm">{item.name}</div>
                                <div className="text-grey-500">{ item.caption}</div>
                            </Link>
                        </div>
                    )
                })
            }
        </div>)
}


export const MiniC = ({startIndex, stopIndex}) => {
    let data = componentData
    return (
        <div className='grid grid-cols-4 gap-8'>
            {
                data.slice(startIndex, stopIndex).map((item, index) => {
                    return (
                        <div key={index}  className='h-full flex flex-col shadow py-4 px-4 rounded text-xs items-center'>
                            <Link to={item.link} className="mx-auto space-y-2.5 overflow-hidden ">
                                <div className='h-40  bg-gray-100'>
                                    <img src={buttons} alt="" className="h-full w-32 mx-auto" />
                                </div>
                                <div className="capitalize font-semibold text-sm">{item.name}</div>
                                <div className="text-grey-500 text-gray-500 f">{ item.caption}</div>
                            </Link>
                        </div>
                    )
                })
            }
        </div>)
}


// export default Mini
