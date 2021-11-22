import React from 'react'
import { useLocation } from 'react-router'
import Header from '../../Components/Header'
import Layout from '../../Components/Layout'
import { foundationData } from '../../Utils/Data'
import foundationsHome from '../../Assets/General/foundationsHome.svg'
import Accessibility from './Accessibility'
import Color from './Color'
import FoundationsHome from './Home'

const Foundations = () => {
    const location = useLocation()
    // const [selected, setSelected] = useState(0)

    return (
        <Layout sideData={foundationData} sideTitle="Foundations">
            <Header title='Foundations' caption='The visual elements needed to create engaging layouts and awesome user experiences.' headerImg={foundationsHome} />
            <div className='flex py-14'>
                <div className='flex-1 px-12 '>
                    {(location.pathname === '/foundations' || location.pathname === '/foundations/') && <FoundationsHome />}
                    {(location.pathname === '/foundations/accessibility' || location.pathname === '/foundations/accessibility/')  && <Accessibility />}
                    {(location.pathname === '/foundations/color' || location.pathname === '/foundations/color/') && <Color />}
                </div>
               
            </div>
        </Layout>
    )
}

export default Foundations
