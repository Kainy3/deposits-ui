import React from 'react'
// import { componentData } from '../../Utils/Data'
import { MiniC } from '../../Components/Mini'

const CompHome = () => {
    return (
        <div>
            <div>
                <h5 className='font-semibold uppercase'>Buttons &amp; Atomic components </h5>
            <br />
                <MiniC startIndex={1} stopIndex={6} />
            </div>
            <br />
            <br />
            <div>
                <h5 className='font-semibold uppercase'>Inputs &amp; file uploader</h5>
            <br />
                <MiniC startIndex={1} stopIndex={6} />
            </div>
        </div>
    )
}

export default CompHome
