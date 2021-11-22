import React from 'react'
import Layout from '../Components/Layout'
import { Mini } from '../Components/Mini'
import { Button1, Button2 } from '../Components/Button'
import { HomeImgs } from '../Utils/Data'
import componentsMini from '../Assets/Home/componentsMini.svg'
import foundationsMini from '../Assets/Home/foundationsMini.svg'


const Home = () => {
    return (
        <Layout className='mb-20' >

            <section className="md:flex w-8/12 mx-auto my-14 justify-center space-x-20">
                <div className='space-y-5 my-auto'>
                    <div className='text-3xl font-semibold'>
                        Design solutions For fintech Companies
                    </div>
                    <div><p>Swys UI is built on the belief that you can never predict all future fintech requirements, web or mobile, only prepare for it. Available in React and Vue frameworks.</p></div>
                    <div className='flex space-x-5'>
                        <div><Button1 link='/components'>Components</Button1> </div>
                        <div><Button2 link='/documentation'>Documentation</Button2></div>
                    </div>
                </div>
                <div className='h-full w-full'>
                    <img className='h-full' src={HomeImgs[0].img} alt={HomeImgs[0].alt} />
                </div>
            </section>

            {/* second section on sponsors icons*/}

            <section className='w-full flex justify-center bg-grey_1 h-72'>
                <div className='w-8/12 flex justify-center mb-20 items-center'>
                    {HomeImgs.map((item, index) => {
                        return (
                            index !== 0 &&
                            <div key={index} className=' p-3 m-3'>
                                <img className='border' src={item.img} alt={item.alt} />
                            </div>
                        )

                    }
                    )}

                </div>
            </section>

            <section className='-mt-20 flex justify-center mx-auto w-7/12 space-x-10'>
                <Mini source={foundationsMini} title={'Foundations'}
                    text='The visual elements needed to create engaging layouts and awesome user experiences.'
                />
                <Mini source={componentsMini} title={'Components'}
                    text='The visual elements needed to create engaging layouts and awesome user experiences.'
                />
            </section>

        </Layout>
    )
}

export default Home
