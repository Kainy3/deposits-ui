// import Caption from '../../Components/Content/Caption'
import { Heading3 as H3, Heading4 as H4 } from '../../Components/Content/Heading'
import Text from '../../Components/Content/Text'
// import Header from '../../Components/Header'

const Color = () => {

    const colors = {
        neutral: ['#212934', '#5F6B7A', '#8895A7', '#B8C4CE', '#CFD6DE', '#E1E7EC', '#F5F8FA'],
        blue: ['#121D4F', '#1D3082', '#2843B4', '#9AADFF', '#C1CDFF', '#DEE4FB', '#F1F2FE'],
        green: ['#104F35', '#1A8258', '#24B57A', '#8FD9BB', '#BBE8D6', '#E7F7F0', '#EFF6F3'],
        red: ['#8F2222', '#C22E2E', '#F53A3A', '#F76969', '#F99090', '#FCB8B8', '#FCE8E8'],
        yellow: ['#8F940F', '#C1C714', '#F3FB1A', '#F5FC4C', '#F8FD7A', '#FBFEA7', '#FEFFE4'],
        purple: ['#391559', '#5A208C', '#7B2CBF', '#B68BDC', '#D1B5E9', '#EBDFF6', '#F9F5FC'],
        orange: ['#663C02', '#B36803', '#FF9505', '#FFB44F', '#FFD49B', '#FFF4E5', '#FFF4E5'],
        teal: ['#00646B', '#00939E', '#00C4D2', '#61DAE3', '#94E6EC', '#C7F2F5', '#EEF9F9'],
        magenta: ['#4F0030', '#82004E', '#B5006D', '#D97DB4', '#E8B0D2', '#F7E3EF', '#F8F4F6'],
        type: ['XDark', 'Dark', 'Base', 'Light', 'Xlight', 'XXlight', 'XXXLight']
    }

    const primary = [
        ['#2843B4', 'Name: Swys blue'],
        ['#0DB9E9', 'Name: Swys teal'],
        ['#FFFFFF', 'Name: Swys white'],
        ['#EEF1FB', 'Name: Swys grey'],
    ]
    const secondary = [
        ['#141D47'],
        ['#1E2E72'],
        ['#0370D6'],
        ['#6CDFFF'],
    ]
    const semantics = [
        ['#24B57A', 'Intent: Success'],
        ['#FFC06A', 'Intent: Warning'],
        ['#B52424', 'Intent: Error'],
        ['#0370D6', 'Intent: Info'],
    ]
    const trying = Object.entries(colors)

    return (
        <div>
            {/* <Header searchHidden imgHidden smallHeader title='Color' caption='Color makes our brand stands out, helps create consistency across our products.' /> */}

            <main className='px-12 pt-14 pb-32'>
                <section>
                    <H3>Introduction</H3>
                    <Text>
                        Choosing the right color palette is one of the most crucial, essential steps in the design process. The hues we use affect the style and mood of the design, create the "look &amp; feel" and are highly memorable. <br /><br />
                        According to many studies, over 90% of whether we like a product comes from the color palette that it uses. When choosing colors, try to establish the target market, message, and style of your product down to the emotions you want your future users to have when looking at your design.
                    </Text><br /><br />
                </section>

                <section>
                    <H3>Design Values</H3>
                    <Text>
                        <b>Intentional: </b>use colors in a functional way to show intent when needed. <br />
                        <b>Accessible:</b> use colors with as much contrast as possible while still being beautiful.  <br />
                        <b>High Dynamic Range:</b> use very light neutral colors for background colors. Allow for a wide range of the color spectrum.
                    </Text><br /><br />
                </section>

                <section>
                    <H3>Implementation</H3>
                    <Text>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                    </Text><br /><br />
                </section>
                <section>
                    <H3>Primary Colors</H3>
                    <Text>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                    </Text><br />
                    <div className="flex space-x-5 w-full my-5">

                        {primary.map((item, index) => (
                            <div key={index} className='w-32 m-0 rounded p-0'>
                                <div style={{ backgroundColor: item[0] }} className='h-20 rounded-t w-full' />
                                <div style={{ backgroundColor: '#F3F3F3', color: '#7C8191' }} className='bg-gray-200 text-xs pl-2 py-2 '>
                                    {item[0]} <br />  {item[1]}
                                </div>
                            </div>
                        ))}
                    </div>
                        <br /><br />
                </section>

                <section>
                    <H3>Secondary Colors</H3>
                    <Text>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                    </Text>
                <div className="flex space-x-5 w-full my-5 ">

                    {secondary.map((item, index) => (
                        <div key={index} className='w-32 m-0 rounded p-0'>
                            <div style={{ backgroundColor: item[0] }} className='h-20 rounded-t w-full' />
                            <div style={{ backgroundColor: '#F3F3F3', color: '#7C8191' }} className='bg-gray-200 text-xs pl-2 py-2 rounded-b-md'>{item[0]} <br />  {item[1]}</div>
                        </div>
                    ))}
                </div>
                    <br /><br />
                </section>
                
                <section>
                    <H3>Semantics</H3>
                    <Text>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                    </Text>
                    <div className="flex space-x-5 w-full my-5 ">

                        {semantics.map((item, index) => (
                            <div key={index} className='w-32 m-0 rounded p-0'>
                                <div style={{ backgroundColor: item[0] }} className='h-20 rounded-t w-full' />
                                <div style={{ backgroundColor: '#F3F3F3', color: '#7C8191' }} className='bg-gray-200 text-xs pl-2  py-2 rounded-b-md'>{item[0]} <br />  {item[1]}</div>
                            </div>
                        ))}
                    </div>
                        <br />
                </section>

                <section>
                    <H3>Color Palettes</H3>
                    <Text>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                    </Text>   <br /><br />

                    <div className='min-w-full'>
                        {trying.slice(0, trying.length - 1).map((tryer, index) => (
                            <div key={index} style={{fontSize: '10px'}} className='font-face-hn'>
                                <H4 className='capitalize'>{tryer[0]}</H4>
                                <div className="flex space-x-5">
                                    {tryer[1].map((trye, index1) => (
                                        <div key={index1} className='w-24 m-0 rounded-t p-0'>
                                            <div style={{ backgroundColor: trye }} className='h-24 w-full rounded-t' />
                                            <div style={{ backgroundColor: '#F3F3F3', color: '#7C8191' }} className='bg-gray-200 pl-2 pt-1 '>{trye}</div>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex space-x-5 ">
                                    {colors.type.map((type, index2) => (
                                        <div key={index2} style={{ backgroundColor: '#F3F3F3', color: '#7C8191' }} className='w-24 m-0 p-0 pl-2 pb-1 uppercase bg-gray-200 rounded-sm-b'>
                                            {type}
                                        </div>
                                    ))}
                                </div>

                            </div>
                        ))}
                        <br /><br />

                    </div>
                </section>
            </main>
        </div>
    )
}

export default Color
