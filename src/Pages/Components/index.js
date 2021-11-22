import React from 'react'
import { useLocation } from 'react-router'
import Header from '../../Components/Header'
import Layout from '../../Components/Layout'
import { componentData } from '../../Utils/Data'
import componentsIllustration from '../../Assets/Components/componentsIllustration.svg'
import CompHome from './Home'
// import foundationsHome from '../../Assets/General/foundationsHome.svg'

const Components = () => {
    const location = useLocation()
    // const [selected, setSelected] = useState(0)

    return (
        <Layout sideData={componentData} sideTitle="Components">
            <Header title='Components' caption='The habitual elementary units of our design system. The elements that gets you started.' headerImg={componentsIllustration} />
            <div className='flex py-14'>
                <div className='flex-1 px-12 '>
                   {(location.pathname === '/components' || location.pathname === '/components/') && <CompHome />}
                    {/*  {(location.pathname === '/compoents/accessibility' || location.pathname === '/compoents/accessibility/') && <Accessibility />}
                    {(location.pathname === '/compoents/color' || location.pathname === '/compoents/color/') && <Color />} */}
                </div>

            </div>
        </Layout>
    )
}

export default Components
