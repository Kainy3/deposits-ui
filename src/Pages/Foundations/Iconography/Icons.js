import React from 'react'
import { Heading3 as H3 } from '../../../Components/Content/Heading'
import Text from '../../../Components/Content/Text'
import search from '../../../Assets/General/search.svg'
import allIcons from '../../../Assets/Foundations/allIcons.svg'


const Icons = () => {
    return (
        <div className='my-12'>
            <section>
                <H3>
                    All Icons
                </H3>
                <Text >
                    Icons should be used in a purposeful manner to maximize comprehension and reduce cognitive load when you need to call attention to a particular item. An icon is a small pictogram that either symbolizes a function or status. Most icon shapes come from a simplified version of everyday objects and shapes.
                    <br /> <br />
                 
                </Text>
            </section>
            <section>
                <div className={`flex w-full px-4 py-1 focus:outline-none items-center shadow-sm my-5 bg-white `}>
                    <img className='w-5 h-3 ' src={search} alt="" />
                    <input className={`w-full border-0 h-full text-sm focus:outline-none placeholder-gray-300 `} placeholder={`Search Icons`} type="text" />
                </div>
                <div>
                    <img src={allIcons} alt="" />
                </div>
            </section>
          
        </div>
    )
}

export default Icons
