import React from 'react'
import Caption from '../../Components/Content/Caption'
import { Heading3 as H3, Heading4 as H4 } from '../../Components/Content/Heading'
import Text from '../../Components/Content/Text'
// import Header from '../../Components/Header'
import image1 from '../../Assets/Foundations/LayoutGrid/Group7428.svg'
import image2 from '../../Assets/Foundations/LayoutGrid/Group7429.svg'
import image3 from '../../Assets/Foundations/LayoutGrid/Group7430.svg'
import image4 from '../../Assets/Foundations/LayoutGrid/Group7431.svg'
import image5 from '../../Assets/Foundations/LayoutGrid/Group7432.svg'
import image6 from '../../Assets/Foundations/LayoutGrid/Group7433.svg'
import image7 from '../../Assets/Foundations/LayoutGrid/Group7447.svg'
import image8 from '../../Assets/Foundations/LayoutGrid/z-pattern.png'
import image9 from '../../Assets/Foundations/LayoutGrid/f-pattern.png'


const LayoutGrid = () => {
    return (
        <div className=''>
            {/* <Header searchHidden imgHidden smallHeader title='Layout &amp; Grid' caption='Layouts and grid is about positioning of elements on screen to create good experience.' /> */}

            <div className='px-12 pt-14 pb-32'>

                <div>
                    <H3>Introduction</H3>
                    <Text>
                        Grid is a structure of lines that helps keep your layout together. It's the structural blueprint of any good project as it helps to create the hierarchy between elements and allows for better understanding and processing.
                        <br /><br />
                        Even though we don't see the gridlines in the final project (usually), even a subtle change that goes outside of the pre-set rules will have a significant impact on how we perceive the final result. It's the subconscious difference between a good project and a great one.
                        <br /><br />
                        Building a grid should always start with choosing its base value. It'sthe smallest number we use to set all the other values. In general,all our grid values should be divisible by that base number.
                    </Text>
                    <div><img src={image6} alt="" /></div>
                </div>

                <div>
                    <H3>Fluid Grid</H3>
                    <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum <br /><br /></Text>
                    <div className='flex'>
                        <img src={image5} alt="" />
                        <img src={image4} alt="" />
                    </div>
                </div>
                <div>
                    <H3>Fixed Grid</H3>
                    <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum <br /><br /></Text>
                    <div className='flex'>
                        <img src={image7} alt="" />
                        <img src={image3} alt="" />
                    </div>
                    <Caption className="text-xs text-gray-400">Here are two examples of a 3 column fixed grid with a margin of 42 and a gutter of 20. The column width is set at 42. As you can see on a narrow screen, it can fill the entire width, while on a wider one, it will leave space on the sides.</Caption>
                </div>
                <div>
                    <H3>8 Point Grid</H3>
                    <Text>The 8-point grid is currently the most popular grid-type in modern UI design. It requires a bit of extra effort, but it's well worth trying it. The main benefit is the fact that it gives you more flexibility with spacing - you can fit more complex (and smaller) elements within the same space and have them all still fit the grid. <br /><br /></Text>
                    <div className='flex'>
                        <img src={image1}  alt="" />
                        <img src={image2}  alt="" />
                    </div>

                </div>
                <div>
                    <H3>How We Scan Contents</H3>
                    <Text>We don't read anymore. We scan. There are two main patterns that our eyes follow while looking at content. Knowing them will help you plan your layout for maximum effect. <br /><br /></Text>
                    <div>
                        <H4>F-Pattern</H4>
                        <Text>We don't read anymore. We scan. There are two main patterns that our eyes follow while looking at content. Knowing them will help you plan your layout for maximum effect. <br /><br /></Text>
                    </div>
                    <div>
                        <H4>Z-Pattern</H4>
                        <Text>Z-pattern happens when a large photo or video breaks an F-pattern. We jump back to the left diagonally, right through that element.<br /><br /></Text>
                    </div>
                    <div className='flex'>
                        <img src={image9}  alt="" />
                        <img src={image8} alt="" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default LayoutGrid
