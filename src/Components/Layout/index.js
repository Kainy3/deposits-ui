import Nav from './Nav'
import Footer from './Footer'
import SideBar from './SideBar'
import { useLocation } from 'react-router'


const Index = ({ style, sideData, sideTitle, className, classname, children }) => {
    let location = useLocation()
    return (
        <div style={style} className={`${classname}`}>
            <Nav />

            <div className='flex'>
                {location.pathname !== '/' && <SideBar data={sideData} title={sideTitle} />}

                <div className={`flex-1 ${className}`}>
                    {children}
                </div>
            </div>

            <Footer />

        </div>
    )
}

export default Index



    // < div style = { style } className = {`${className} flex h-screen`}>
    //         <Nav />
    //         <div className="w-full h-screen">
    //             <SideBar />
    //             <div className="h-[88.1%] overflow-y-auto px-8">
    //                 {children}
    //             </div>
    //         </div>
    //         <Footer />
    //     </div >