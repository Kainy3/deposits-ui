import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const SideBar = ({ data, title, }) => {
    // let location = useLocation()
    const [selected, setSelected] = useState(0)
    return (
        <div className="text-xs px-0 shadow pt-2 pb-60 bg-white min-h-screen w-60">
            <div className='font-semibold uppercase pl-10 my-5'>
                <p className='font-3xl'> {title}</p>
            
            </div>
            <div>
                {data?.map((item, index) => (
                    <Link key={index} onClick={() => setSelected(index)} to={item.link}>
                        < div
                            className={` capitalize pl-10 py-2 my-2 cursor-pointer text-gray-600
                            ${selected === index && 'bg-blue-50 border-r-2 border-primary'}`}>
                            {item.name}
                        </div>
                    </Link>
                )
                )}
            </div>
        </div >
    )
}

export default SideBar
