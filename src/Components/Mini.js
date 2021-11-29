import React from 'react'
import { Link } from 'react-router-dom'
import typography from '../Assets/Foundations/typography.svg'
import { componentData, foundationData } from '../Utils/Data'
import Caption from './Content/Caption'


export const Mini = ({ id, source, title, text, hovered, setHovered }) => {
    return (
        <div onMouseOver={() => setHovered(true)} onMouseOut={() => setHovered(false)} style={{ width: '450px' }} className={`flex h-60 items-center text-xs rounded justify-center cursor-pointer space-x-3 p-5 shadow bg-white hover:bg-hoverBlue hover:text-white`}>
            <div className='h-full w-60'>
                <img className='h-60 w-full ' src={source} alt='' />
            </div>
            <div className='my-auto space-y-2'>
                <div className='font-semibold text-sm capitalize '><h6>{title}</h6></div>
                <div>{text}</div>
                <button className={` ${(hovered) ? 'text-white' : 'text-hoverBlue'} `}>Learn More</button>

            </div>

        </div>
    )
}


export const MiniF = () => {
    let data = foundationData
    return (
        <div className='lg:grid grid-cols-4 gap-8'>
            {
                data.slice(1, data.legth).map((item, index) => {
                    return (
                        <div key={index} className='h-44 flex md:flex-col shadow py-auto px-2 rounded text-xs items-center'>
                            <Link to={item.link} className="mx-auto my-auto space-y-2.5 ">
                                <div>
                                    <img src={typography} alt="" className="h-full w-max" />
                                </div>
                                <div className="capitalize font-semibold text-sm">{item.name}</div>
                                <Caption className="text-grey-500">{item.caption}</Caption>
                            </Link>
                        </div>
                    )
                })
            }
        </div>)
}


export const MiniC = ({ startIndex, stopIndex, indices, indices2, imgClass }) => {
    let data = componentData

    return (
        <div className='grid grid-cols-4 gap-8'>
            {
                data.slice(startIndex, stopIndex).map((item, index) => {
                    return (
                        <div key={index} className='h-full flex flex-col shadow py-4 px-4 rounded items-center'>
                            {
                                (index === indices || index === indices2) ? (
                                    <Link to={item.link} className="mx-auto space-y-2.5 overflow-hidden ">
                                        <div className='h-40 flex bg-gray-100'>
                                            <img src={item.img} alt="" className={`w-32 ${imgClass}`} />
                                        </div>
                                        <div className="font-face-hn capitalize font-semibold ">{item.name}</div>
                                        <Caption small className="">{item.caption}</Caption>
                                    </Link>
                                ) : (

                                    <Link to={item.link} className="mx-auto space-y-2.5 overflow-hidden ">
                                        <div className='h-40  bg-gray-100'>
                                            <img src={item.img} alt="" className="h-full w-32 mx-auto" />
                                        </div>
                                        <div className="font-face-hn capitalize font-semibold ">{item.name}</div>
                                        <Caption small className="">{item.caption}</Caption>
                                    </Link>
                                )
                            }

                        </div>
                    )
                })
            }
        </div>)
}


// export default Mini
