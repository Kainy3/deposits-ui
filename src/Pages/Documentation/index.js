import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router'
import ContentNav from '../../Components/Content/ContentNav'
import Header from '../../Components/Header'
import Layout from '../../Components/Layout'
import { documentData } from '../../Utils/Data'
import Introduction from './Introduction'
import License from './License'


const Documentation = () => {
    
    const location = useLocation()
    const [selected, setSelected] = useState(0)
    // console.log(location.pathname)

    const getNestedHeadings = (headingElements) => {
        const nestedHeadings = []

        headingElements.forEach((heading, index) => {
            const { innerText: title, id } = heading

            if (heading.nodeName === "H3") {
                nestedHeadings.push({ id, title, items: [] })
            } else if (heading.nodeName === "H4" && nestedHeadings.length > 0) {
                nestedHeadings[nestedHeadings.length - 1].items.push({
                    id,
                    title,
                })
            }
        })
        return nestedHeadings
    }

    const useHeadingsData = () => {
        const [nestedHeadings, setNestedHeadings] = useState([]);

        useEffect(() => {
            const headingElements = Array.from(
                document.querySelectorAll("h3, h4")
            );

            const newNestedHeadings = getNestedHeadings(headingElements);
            setNestedHeadings(newNestedHeadings);
        }, []);

        return { nestedHeadings };
    };
    const { nestedHeadings } = useHeadingsData();


    return (
        <Layout sideData={documentData} sideTitle="Documentation" >
            <Header searchHidden imgHidden smallHeader title='Documentation' caption='The habitual elementary units of our design system. The elements that gets you started.' />

            <div className='flex py-14'>
                <div className='flex-1 px-12 '>
                    {(location.pathname === '/documentation' || location.pathname === '/documentation/') && <Introduction />}

                    {(location.pathname === '/documentation/license' || location.pathname === '/documentation/license/') && <License />}
                </div>

            <ContentNav nestedHeadings={nestedHeadings} selected={selected} setSelected={setSelected} />
            </div>
        </Layout>
    )
}

export default Documentation
    // || location.pathname === '/documentation/license'
