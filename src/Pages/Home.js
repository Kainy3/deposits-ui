import { useState } from 'react'
import Layout from '../Components/Layout'
import { Mini } from '../Components/Mini'
import { Button1, Button2 } from '../Components/Button'
import { HomeImgs } from '../Utils/Data'
import componentsMini from '../Assets/Home/componentsMini.svg'
import foundationsMini from '../Assets/Home/foundationsMini.svg'
import Caption from '../Components/Content/Caption'


const Home = () => {
    const [hoveredA, setHoveredA] = useState(false)
    const [hoveredB, setHoveredB] = useState(false)



    return (
        <Layout className='mb-20' >

            <section className="md:flex w-8/12 mx-auto mt-10 mb-14 justify-center space-x-20">
                <div className='space-y-5 my-auto flex-1 '>
                    <div className='text-3xl font-semibold font-face-hn text-header'>
                        Design System For Fintech Solutions.
                    </div>
                    <div><Caption>Deposits UI Kit is built on the belief that you can never predict all future fintech requirements, web or mobile, only prepare for it. Available in React and Vue frameworks.</Caption></div>
                    <div className='flex space-x-5'>
                        <div><Button1 link='/components'>Components</Button1> </div>
                        <div><Button2 link='/documentation'>Documentation</Button2></div>
                    </div>
                </div>
                <div className='h-full w-max '>
                    <img className='h-full w-full' src={HomeImgs[0].img} alt={HomeImgs[0].alt} />
                </div>
            </section>

            {/* second section on sponsors icons*/}

            <section className='w-full flex justify-center bg-grey_1 h-72'>
                <div className='w-8/12 flex justify-center mb-20 items-center'>
                    {HomeImgs.map((item, index) => {
                        return (
                            index !== 0 &&
                            <div key={index} className='p-3 m-3'>
                                <img className='' src={item.img} alt={item.alt} />
                            </div>
                        )
                    }
                    )}

                </div>
            </section>

            <section className='-mt-20 flex justify-center mx-auto  '>
                <div className='flex space-x-10 '>
                    <Mini source={foundationsMini} hovered={hoveredA} setHovered={setHoveredA} title={'Foundations'}
                        text='The visual elements needed to create engaging layouts and awesome user experiences.'
                    />
                    <Mini source={componentsMini} hovered={hoveredB} setHovered={setHoveredB} title={'Components'}
                        text='The visual elements needed to create engaging layouts and awesome user experiences.'
                    />
                </div>
            </section>

        </Layout>
    )
}

export default Home
