import { Link } from 'react-router-dom'
import swysDark from '../../Assets/General/swys-dark.svg'

const Footer = () => {
    return (
        <div className='w-full p-14 bg-secondary text-white'>
            <section className='w-full flex justify-start'>
                <div className='w-3/12 text-right px-5'>
                    <img className='ml-auto' src={swysDark} alt='' />
                </div>
                {/* Links */}
                <div className="w-full flex justify-around">
                    <div className='space-y-3'>
                        <Link to='/documentation'> <p>Documentation</p> </Link>
                        <Link to='/foundations'> <p>Foundations</p> </Link>
                        <Link to='/components'> <p>Components</p> </Link>
                    </div>
                    <div>
                        <Link to='/gitlab'> <p>Gitlab</p> </Link>
                        <Link to='/react-storybook'> <p>React StoryBook</p> </Link>
                        <Link to='/vue-storybook'> <p>Vue StoryBook</p> </Link>
                    </div>
                    <div>
                        <Link to='/privacy-policy'> <p>Privacy Policy</p> </Link>
                        <Link to='/license'> <p>License</p> </Link>
                    </div>
                </div>
            </section>

            <section className='w-10/12 mt-10 mx-auto pt-10 border-t border-gray-600 text-center'>
                <p className=''>
                    © 2021 Swys.io. All rights reserved.
                </p>
            </section>
        </div>
    )
}

export default Footer
