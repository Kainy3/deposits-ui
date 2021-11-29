import { MiniC } from '../../Components/Mini'
import {CompHeader} from './index'

const CompHome = () => {
    // let indices = 200
    return (
        <div className='space-y-12'>
            <div className=''>
                <CompHeader>Buttons &amp; Atomic components </CompHeader>
                <MiniC startIndex={1} stopIndex={6} />
            </div>
            <div className=''>
                <CompHeader>Inputs &amp; file uploader</CompHeader>
                <MiniC startIndex={6} stopIndex={13} />
            </div>
            <div className=''>
                <CompHeader>Selects &amp; Drop-Down Menu</CompHeader>
                <MiniC startIndex={13} stopIndex={17} />
            </div>
            <div className=''>
                <CompHeader>Modals</CompHeader>
                <MiniC startIndex={17} stopIndex={22} indices={3} indices2={0} imgClass='mt-auto ml-auto' />
            </div>
            <div className=''>
                <CompHeader>Feedback Indicators</CompHeader>
                <MiniC startIndex={22} stopIndex={26} />
            </div>
            <div className=''>
                <CompHeader>Toggles</CompHeader>
                <MiniC startIndex={26} stopIndex={29} />
            </div>
            <div className=''>
                <CompHeader>Tables</CompHeader>
                <MiniC startIndex={29} stopIndex={30} />
            </div>
            <div className=''>
                <CompHeader>Utilities</CompHeader>
                <MiniC startIndex={30} stopIndex={34} />
            </div>
        </div>
    )
}

export default CompHome
