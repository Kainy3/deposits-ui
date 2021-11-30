import React from 'react'
import { Do, Dont } from '../../../Components/Content/DoDont'
import { Heading3 as H3, Heading4 as H4 } from '../../../Components/Content/Heading'
import Text from '../../../Components/Content/Text'
import image1 from '../../../Assets/Foundations/Iconography/Path9234.svg'
import image2 from '../../../Assets/Foundations/Iconography/Group7489.svg'
import image3 from '../../../Assets/Foundations/Iconography/Group7490.svg'
import image4 from '../../../Assets/Foundations/Iconography/Group7491.svg'
import image5 from '../../../Assets/Foundations/Iconography/Group7499.svg'
import image6 from '../../../Assets/Foundations/Iconography/Group7500.svg'
import image7 from '../../../Assets/Foundations/Iconography/Group7499.svg'
import image8 from '../../../Assets/Foundations/Iconography/Group7499.svg'
import image9 from '../../../Assets/Foundations/Iconography/Path9234.svg'
import image10 from '../../../Assets/Foundations/Iconography/Path9234.svg'
import image11 from '../../../Assets/Foundations/Iconography/Group7499-1.svg'
import image12 from '../../../Assets/Foundations/Iconography/Group7500-1.svg'
import image13 from '../../../Assets/Foundations/Iconography/Group7466.svg'
import image14 from '../../../Assets/Foundations/Iconography/Group7465.svg'

import Caption from '../../../Components/Content/Caption'



const Images = ({ one, two, three, four, five, six }) => {
    return (
        <div className="h-36 w-3/4 rounded flex items-center justify-between px-12   space-x-2 bg-grey_1">
            <div className='flex space-x-5'>
                <img src={one} alt="" />
                <img src={two} alt="" />
            </div>
            <div className='flex space-x-5'>
                <img src={three} alt="" />
                <img src={four} alt="" />
            </div>
            <div className='flex space-x-5'>
                <img src={five} alt="" />
                <img src={six} alt="" />
            </div>

        </div>
    )
}



const Usage = () => {
    return (
        <div className='my-12'>
            <section>
                <H3>
                    Introduction
                </H3>
                <Text >
                    Icons should be used in a purposeful manner to maximize comprehension and reduce cognitive load when you need to call attention to a particular item. An icon is a small pictogram that either symbolizes a function or status. Most icon shapes come from a simplified version of everyday objects and shapes.
                    <br /> <br />
                    Keep in mind, however, that the meaning of an icon is not always universal, and even the most obvious shapes can be interpreted the wrong way by some users. As a general rule, icons should be used in combination with meaningful text to support users progressing through the product in an accessible manner. There are few widely recognized icons, so whenever possible, use a label or supporting text to ensure its meaning is understood. In this case, an aria-label will be used for the icon.
                </Text>
                <br /><br />
            </section>
            <section>
                <H3>Do's &amp; Don'ts</H3>
                <Text>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                </Text>
                <br /><br />
                <div className='flex font-semibold  space-x-5 text-xs'>
                    <div className='flex-1'>
                        <div className="flex items-center justify-center py-12 bg-grey_1">
                            <div className="flex items-center py-4 px-5  justify-center bg-gray-200 rounded">
                                <img src={image1} alt="" />
                            </div>
                        </div>
                        <Dont text='You must log in before you can write a comment' />
                    </div>
                    <div className='flex-1'>
                        <div className="flex items-center justify-center py-12 bg-grey_1">
                            <div className="flex items-center space-x-2 py-4 px-5  justify-center bg-gray-200 rounded">
                                <img src={image1} alt="" />
                                <Caption> Favourite </Caption>
                            </div>
                        </div>
                        <Do text='Log in to comment' />
                    </div>
                </div>
                <br /><br />
                <Text>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                </Text>

                <br /><br />
                <div className='flex space-x-5 font-semibold text-xs'>
                    <div className='flex-1'>
                        <div className="h-36  rounded flex items-center justify-center bg-grey_1">
                            <div className="space-y-4 ">
                                <div className=" items-center flex space-x-2">
                                    <img className='' src={image2} alt="" />
                                    <Caption> Add User </Caption>
                                </div>
                                <div className=" items-center flex space-x-2">
                                    <img src={image3} alt="" />
                                    <Caption> Add tab </Caption>
                                </div>
                                <div className=" items-center flex space-x-2">
                                    <img src={image4} alt="" className='' />
                                    <Caption> Add bookmark </Caption>
                                </div>
                            </div>
                        </div>
                        <Dont text='You must log in before you can write a comment' />
                    </div>
                    <div className='flex-1'>
                        <div className="h-36 rounded flex items-center justify-center space-x-2 bg-grey_1">
                            <p className="font-medium text-caption text-lg">+</p>
                            <Caption> Add </Caption>
                        </div>
                        <Do text='Log in to comment' />
                    </div>
                </div>
                <br /><br />
            </section >


            <section>
                <br /><br />
                <H3>Styling </H3>
                <Text>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                </Text>
                <div>
                    <H4>Variation</H4>

                    <Images one={image5} two={image6} three={image7} four={image8} five={image9} six={image10} />

                    <Text>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                    </Text>
                    <br /><br />
                </div>
                <div>
                    <H4>Color</H4>
                    <Images one={image11} two={image12} three={image13} four={image14} five={image9} six={image10} />
                    <Text>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                    </Text>
                    <br /><br />
                </div>
                <div>
                    <H4>Size</H4>
                    <Images one={image5} two={image6} three={image5} four={image6} five={image5} six={image6} />
                    <Text>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                    </Text>
                </div>
                <br /><br />
            </section>
        </div >
    )
}

export default Usage
