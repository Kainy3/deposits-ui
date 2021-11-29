import { Link, useLocation } from "react-router-dom"
import Logo from '../../Assets/General/deposits.svg'
import GitLab from '../../Assets/General/gitLab.svg'
import { navHome } from '../../Utils/Data'

// import { useState } from "react"
// import Data from '../../Utils/Data'

const Nav = () => {
    let location = useLocation()

    return (
        <nav className=' bg-white h-16 w-full shadow-md flex justify-between px-5'>
            {/* left-of-navbar  */}

            <div className='px-5 flex  items-center'>
                <Link to='/' className=''>
                    <img className='' src={Logo} alt='' />
                </Link>
            </div>

            {/* center-of-navbar  */}
            <div className='m-0 p-0 flex justify-evenly'>
                {navHome.map((value, index) => (
                    <Link key={index} className={`h-full flex my-auto  items-center text-gray-500 ${location.pathname.includes(value.link) && '  text-primary border-b-2 border-primary'} hover:text-primary`} to={value.link}>
                        <div className='flex items-center text-xs  uppercase px-4 mx-2 my-auto h-full '>
                            {value.name}
                        </div>
                    </Link>
                ))

                }

            </div>
            {/* Right of navbar  */}
            <div className='h-full flex items-center'>
                <img src={GitLab} alt='' />
            </div>

        </nav>
    )
}

export default Nav
