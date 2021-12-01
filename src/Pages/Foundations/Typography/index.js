import { useState } from 'react'
// import Header from '../../../Components/Header'
import CodeTypo from './CodeTypo'
import UsageTypo from './UsageTypo'

const Typography = () => {
    const [selected, setSelected] = useState(1)
    return (
        <div className='-mt-12'>
            <div className='px-12 mb-14'>
                <nav className='flex justify-start -mx-12 pl-10 bg-grey_1 space-x-6 font-semibold text-md'>
                    <p onClick={() => setSelected(1)} className={`p-3 cursor-pointer hover:text-hoverBlue   ${selected === 1 && 'text-hoverBlue border-b-2 border-primary'}`} >Usage</p>
                    <p onClick={() => setSelected(2)} className={`p-3 cursor-pointer hover:text-hoverBlue  ${selected === 2 && 'text-hoverBlue border-b-2 border-primary'}`} >Code</p>
                </nav>
                {selected === 1 && <UsageTypo />}
                {selected === 2 && <CodeTypo />}
            </div>
        </div>
    )
}

export default Typography
