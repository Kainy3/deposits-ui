import React, { useState } from 'react'
import { useLocation } from 'react-router'
import ContentNav from '../../Components/ContentNav'
import Header from '../../Components/Header'
import Layout from '../../Components/Layout'
import { documentData } from '../../Utils/Data'
import Introduction from './Introduction'
import License from './License'


const Documentation = () => {
    
    const location = useLocation()
    const [selected, setSelected] = useState(0)
    // console.log(location.pathname)
    return (
        <Layout sideData={documentData} sideTitle="Documentation" >
            <Header searchHidden imgHidden smallHeader title='Documentation' caption='The habitual elementary units of our design system. The elements that gets you started.' />

            <div className='flex py-14'>
                <div className='flex-1 px-12 '>
                    {(location.pathname === '/documentation' || location.pathname === '/documentation/')  && <Introduction />}
                    
                    {(location.pathname === '/documentation/license' || location.pathname === '/documentation/license/') && <License />}
                </div>
                <div className='w-64'>
                    <ContentNav selected={selected} setSelected={setSelected} />
                </div>
            </div>
        </Layout>
    )
}

export default Documentation
    // || location.pathname === '/documentation/license'
