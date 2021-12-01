import React from 'react'
import { Link } from 'react-router-dom'
import {Heading4 as H4 } from '../Components/Content/Heading'
import { componentData, foundationData } from '../Utils/Data'
import Caption from './Content/Caption'


export const Mini = ({ id, source, title, text, hovered, setHovered }) => {
    return (

        <div onMouseOver={() => setHovered(true)} onMouseOut={() => setHovered(false)} style={{width:'500px'}} className={`flex h-72 p-5 text-xs rounded justify-center shadow bg-white hover:bg-hoverBlue hover:text-white`}>
            <div className='flex items-center p-0 space-x-3 '>
                <div className='w-60 h-full '>
                    <img className=' ' src={source} alt='' />
                </div>
                <div className='my-auto h-40 flex-1 space-y-3'>
                    <div className='font-face-hn text-sm capitalize'><h6>{title}</h6></div>
                    <div className={`w-40 pb-3 ${(hovered) ? 'text-white' : 'text-caption'} `} >  <p>{text}</p> </div>

                    <button className={`font-face-hn text-xs ${(hovered) ? 'text-white' : 'text-hoverBlue font-light'} `}>
                        <Link to={`/${title.toLowerCase()}`} >Learn More</Link>
                    </button>
                </div>
            </div>

        </div>
    )
}


export const MiniF = () => {
    let data = foundationData
    return (
        <div className='lg:grid grid-cols-4 gap-5'>
            {
                data?.slice(1).map((item, index) => {
                    return (
                        <div key={index} className='h-48 md:flex md:flex-col shadow px-5 rounded text-xs items-center'>
                            <Link to={item.link} className="mx-auto overflow-hidden my-auto space-y-3 ">
                                <div>
                                    <img src={item.img} alt="" className="h-full w-max" />
                                </div>
                                <H4 small className="capitalize">{item.name}</H4>
                                <Caption className="text-grey-500 overflow-hidden">{item.caption}</Caption>
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
                data?.slice(startIndex, stopIndex).map((item, index) => {
                    return (
                        <div key={index} className='h-full flex flex-col shadow py-4 px-4 rounded items-center'>
                            {
                                (index === indices || index === indices2) ? (
                                    <Link to={item.link} className="mx-auto space-y-2.5 overflow-hidden ">
                                        <div className='h-40 flex bg-gray-100'>
                                            <img src={item.img} alt="" className={`w-32 ${imgClass}`} />
                                        </div>
                                        <div className="font-face-hn capitalize font-semibold ">{item.name}</div>
                                        <Caption small>{item.caption}</Caption>
                                    </Link>
                                ) : (

                                    <Link to={item.link} className="mx-auto space-y-2.5 overflow-hidden ">
                                        <div className='h-40  bg-gray-100'>
                                            <img src={item.img} alt="" className="h-full w-32 mx-auto" />
                                        </div>
                                        <div className="font-face-hn capitalize font-semibold ">{item.name}</div>
                                        <Caption small >{item.caption}</Caption>
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
