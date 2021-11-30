import { useState } from 'react'
// import Header from '../../../Components/Header'
import Code from './Code'
import Icons from './Icons'
import Usage from './Usage'

const Iconography = () => {
    const [selected, setSelected] = useState(1)
    return (
        <div>
            {/* <Header searchHidden imgHidden smallHeader title='Iconography' caption='The habitual elementary units of our design system. The elements that gets you started.' /> */}

            <div className='px-12 mb-14'>
                <nav className='flex justify-start -mx-12 pl-10 -pb- bg-grey_1 space-x-6 font-semibold text-md'>
                    <p onClick={() => setSelected(1)} className={`p-3 cursor-pointer hover:text-hoverBlue   ${selected === 1 && 'text-hoverBlue border-b-2 border-primary'}`} >Usage and Styling</p>
                    <p onClick={() => setSelected(2)} className={`p-3 cursor-pointer hover:text-hoverBlue  ${selected === 2 && 'text-hoverBlue border-b-2 border-primary'}`} >Code</p>
                    <p onClick={() => setSelected(3)} className={`p-3 cursor-pointer hover:text-hoverBlue  ${selected === 3 && 'text-hoverBlue border-b-2 border-primary'}`} >Icons</p>
                </nav>
                {selected === 1 && <Usage />}
                {selected === 2 && <Code />}
                {selected === 3 && <Icons />}
            </div>
        </div>
    )
}

export default Iconography
