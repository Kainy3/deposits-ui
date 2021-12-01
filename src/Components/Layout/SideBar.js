import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { documentData, foundationData, componentData } from "../../Utils/Data"
// import Documentation from "../../Documentation/index"
// import Foundations from "../../Foundations/index"
// import Components from "../../Components/index"

const SideBar = ({ title, }) => {
    const [selected, setSelected] = useState(0)

    const location = useLocation()
    let data = []
    // let page = Documentation
    location.pathname.includes('documentation') && ((data = documentData))
    location.pathname.includes('foundations') && ((data = foundationData))
    location.pathname.includes('components') && ((data = componentData))
    return (
        <nav className="text-xs font-face-hn sticky px-0 pt-2 pb-10overflow-auto max-h-screen w-60 top-0">

            <div className='font-semibold uppercase pl-10 my-5'>
                <p className='font-3xl '> {title}</p>

            </div>
            <div >
            { console.log(location) }
                {data?.slice(1).map((item, index) => (
                    <Link key={index} onClick={() => setSelected(index)} to={item.link}>
                        < div className={`font-face-hn-li  capitalize pl-10 h-8 flex items-center cursor-pointer text-gray-600 ${((selected === index) || (location === item.link))   && 'bg-blue-100 border-r-2 border-primary' }`}>
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
    // && (page = Components