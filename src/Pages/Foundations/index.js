import { useState, useEffect } from 'react'
import { useLocation } from 'react-router'
import Header from '../../Components/Header'
import ContentNav from '../../Components/Content/ContentNav'
import Layout from '../../Components/Layout'
import { foundationData } from '../../Utils/Data'
import Accessibility from './Accessibility'
import Color from './Color'
import FoundationsHome from './Home'
import Iconography from './Iconography'
import LayoutGrid from './LayoutGrid'
import Typography from './Typography'
import foundationsHome from '../../Assets/General/foundationsHome.svg'


const Foundations = () => {
    const location = useLocation()
    // const [selected, setSelected] = useState(0)
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
        <Layout sideData={foundationData} sideTitle="Foundations">
            <div>
                {(location.pathname === '/foundations' || location.pathname === '/foundations/') && <Header title='Foundations' caption='The visual elements needed to create engaging layouts and awesome user experiences.' headerImg={foundationsHome} />}
                {(location.pathname === '/foundations/accessibility' || location.pathname === '/foundations/accesibility/') && <Header searchHidden imgHidden smallHeader title='Accessibility' caption='The habitual elementary units of our design system. The elements that gets you started.' />}
                {(location.pathname === '/foundations/color' || location.pathname === '/foundations/color/') && <Header searchHidden imgHidden smallHeader title='Color' caption='Color makes our brand stands out, helps create consistency across our products.' />}
                {(location.pathname === '/foundations/iconography' || location.pathname === '/foundations/iconography/') && <Header searchHidden imgHidden smallHeader title='Iconography' caption='The habitual elementary units of our design system. The elements that gets you started.' />}
                {(location.pathname === '/foundations/typography' || location.pathname === '/foundations/typography/') && <Header searchHidden imgHidden smallHeader title='Typography' caption='The habitual elementary units of our design system. The elements that gets you started.' />}
                {(location.pathname === '/foundations/layout' || location.pathname === '/foundations/layout/') && <Header searchHidden imgHidden smallHeader title='Layout &amp; Grid' caption='Layouts and grid is about positioning of elements on screen to create good experience.' />}
            </div>

            <div className="flex">

                <div className='flex'>
                    <div className='flex-1 '>
                        {(location.pathname === '/foundations' || location.pathname === '/foundations/') && <FoundationsHome />}
                        {(location.pathname === '/foundations/accessibility' || location.pathname === '/foundations/accessibility/') && <Accessibility />}
                        {(location.pathname === '/foundations/color' || location.pathname === '/foundations/color/') && <Color />}
                        {(location.pathname === '/foundations/iconography' || location.pathname === '/foundations/iconography/') && <Iconography />}
                        {(location.pathname === '/foundations/typography' || location.pathname === '/foundations/typography/') && <Typography />}
                        {(location.pathname === '/foundations/layout' || location.pathname === '/foundations/layout/') && <LayoutGrid />}
                    </div>


                    {/* {(location.pathname === '/foundations' || location.pathname === '/foundations/') ? <ContentNav nestedHeadings={nestedHeadings} /> : <ContentNav nestedHeadings={nestedHeadings} />} */}
                </div>
                <div className='pt-5'>
                {(location.pathname !== '/foundations' || location.pathname === '/foundations/') && <ContentNav nestedHeadings={nestedHeadings} />}
                </div>
            </div>
        </Layout>
    )
}

export default Foundations
