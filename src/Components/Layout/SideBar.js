import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const SideBar = ({ data, title, }) => {
    // let location = useLocation()
    const [selected, setSelected] = useState(0)
    return (
        <nav className="text-xs font-face-hn sticky px-0 pt-2 pb-10 overflow-auto max-h-screen w-60 top-0">

            <div className='font-semibold uppercase pl-10 my-5'>
                <p className='font-3xl '> {title}</p>
            
            </div>
            <div >
                {data?.map((item, index) => (
                    <Link key={index} onClick={() => setSelected(index)} to={item.link}>
                        < div className={`font-face-hn-li  capitalize pl-10 h-8 flex items-center cursor-pointer text-gray-600 
                            ${selected === index && 'bg-blue-50 border-r-2 border-primary'}`}>
                            {item.name}
                        </div>
                    </Link>
                )
                )}
            </div>
        </nav >
    )
}

export default SideBar
