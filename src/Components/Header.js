import React from 'react'
import search from '../Assets/General/search.svg'
import Caption from './Content/Caption'

const Header = ({ title, caption, headerImg, searchHidden, imgHidden, smallHeader }) => {
    return (
        <header className={`mx-auto flex xl:pr-52 lg:pr-24 py-auto bg-grey_1 w-full font-face-hn ${smallHeader ? 'h-52' : 'h-80'}`}>
            <div className='flex-1 px-12 py-16 '>
                <h2 className='mb-3 text-4xl capitalize open-face-hn text-header font-semibold'> {title} </h2>
                <Caption className='font-medium'> {caption} </Caption>
                <div className={`flex w-full lg:w-2/3 px-4 py-1 focus:outline-none items-center shadow-sm my-5 bg-white ${searchHidden && 'hidden'}`}>
                    <img className='w-5 h-3 ' src={search} alt="" />
                    <input className={`w-full border-0 h-full text-sm focus:outline-none placeholder-gray-300 `} placeholder={`Search ${title.toLowerCase()}`} type="text" />
                </div>
            </div>

            <div className={`p-10 w-72 my-auto h-full ${imgHidden && 'hidden'}`}>
                <img className='h-full w-72 ' src={headerImg} alt="foundations" />
            </div>
        </header>
    )
}

export default Header