import React from 'react'
// import { useLocation } from 'react-router'
// import Header from '../../Components/Header'
import { Heading3 as H3 } from '../../Components/Content/Heading'
import Text from '../../Components/Content/Text'
import Caption from '../../Components/Content/Caption'
import image1 from '../../Assets/Foundations/Accessability/Group7455.svg'
import image2 from '../../Assets/Foundations/Accessability/Group7462.png'
import image3 from '../../Assets/Foundations/Accessability/Group7463.png'
import image6 from '../../Assets/Foundations/Accessability/Group7465-2.svg'
import image7 from '../../Assets/Foundations/Accessability/nathan-dumlao.png'
import image8 from '../../Assets/Foundations/Accessability/Group7475.png'
import { Do, Dont } from '../../Components/Content/DoDont'

const Accessibility = () => {
    return (
        <div>
            <div className='py-12 px-14 pb-28'>
                <H3 id='introduction' className='text-2xl mb-4 font-semibold'>Introduction</H3>
                <Text>

                    Accessible design is everyone's responsibility, from information and user experience design, through to development, and on into help and support. It is about understanding the users' journeys and proactively anticipating their needs. <br /><br />
                    Accessibility of a digital product is a science of making sure the product is suitable for older users, visually impaired, color-blind, and others (including people on low contrast, low-quality displays). The general idea is that a digital product should be easy to "see" for everyone. <br /><br />
                    To make sure products are accessible to everyone, follow the four principles of the <span className='text-blue-600'> Web Content Accessibility Guidelines (WCAG): </span><br /><br />
                    <b> Perceivable: </b>It can be perceived by at least one of a person's senses.<br />
                    <b> Operable: </b> All interactions are operable through a variation of input methods. <br />
                    <b>Understandable:</b>  Information and operation of the interface must be understandable. <br />
                    <b>Robust: </b> Content can be interpreted by a variety of assistive technologies and withstand changes in these technologies.
                    <br /><br /><br />
                </Text>
                <section>
                    <H3 id='use' className='text-2xl mb-4 font-semibold'>Color Use</H3>
                    <Text>Color components like brightness and saturation influence the contrast, which directly affects the readability. The higher the readability, the easier the product is to use for a wider group of people. Sufficient contrast levels help users with vision problems to be able to use the product as intended. We must remember to check the WCAG 2.0 contrast for all essential UI elements.</Text>
                    <br /><br />
                    <div>
                        <img src={image1} alt="" />
                        <Caption small>When designing your interface, remember to have at least a 4.5:1 contrast ratio (or AA) for all of your most crucial UI elements (buttons, forms, essential text).</Caption>
                    </div>
                </section>

                <br /><br />
                <section>
                    <H3 id='structure' className='text-2xl mb-4 font-semibold'>Hierarchy and Structure</H3>
                    <Text>Color components like brightness and saturation influence the contrast, which directly affects the readability. The higher the readability, the easier the product is to use for a wider group of people. Sufficient contrast levels help users with vision problems to be able to use the product as intended. We must remember to check the WCAG 2.0 contrast for all essential UI elements.</Text><br /><br />
                    <div>
                        <img src={image2} alt="" />
                        <Caption small>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                        </Caption >
                    </div>
                    <br /><br />
                    <div>
                        <img src={image3} alt="" />
                        <Caption small>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                        </Caption >
                    </div>
                    <br /><br /><br />
                </section>

                <section>
                    <H3>Copy writing</H3>
                    <Text>Keep content and accessibility text concise. Concise doesn’t mean limited; it means something closer to efficient. Use as few words as possible without losing the meaning. When writing concisely, we make sure every word on the screen has a job. People using screen readers hear every UI element read aloud, so the shorter the text, the faster they can navigate the content. Screen readers can skim more easily and skip irrelevant paragraphs if you keep sentences short and frontload paragraphs with important information.</Text>
                    <br /><br />
                    <div className='flex space-x-5 text-xs'>
                        <Dont text='You must log in before you can write a comment' />
                        <Do text='Log in to comment' />
                    </div>
                    <br /><br /><br />
                </section>

                <section>
                    <H3>Imagery &amp; Media</H3>
                    <Text>If an image contains information that can only be understood by seeing the image, then you need to explain the content of the image using alternative text.Follow these guidelines when you write alt text: The text should be an adequate replacement for both the content and the function of the image.</Text>
                    <br /><br />
                    <div>
                        <div className="flex space-x-2">
                            <img className='text-blue-600 ' src={image6} alt="" />
                            <Text>Determine the correct content and then deliver that message as succinctly as possible.Aim for no more than a few words, though sometimes a short sentence or two may be necessary.</Text>
                        </div>
                        <div className="flex space-x-2">
                            <img className='text-blue-600 ' src={image6} alt="" />
                            <Text>Don't repeat information that is contained in the text found on the page around the image.</Text>
                        </div>
                        <div className="flex space-x-2">
                            <img className='text-blue-600 ' src={image6} alt="" />
                            <Text>Don't use phrases like "image of ..." or "a photo of ..." to describe the image. This is apparent when using screen readers and the description itself should be enough to replace the meaning of the image.</Text>
                        </div>
                        <div className="flex space-x-2">
                            <img className='text-blue-600 ' src={image6} alt="" />
                            <Text> If the meaning and content of an image is conveyed by surrounding text, header, or captions, then you might not need as much alternative text.</Text>
                        </div>
                        <br /><br />

                        <div className='flex space-x-4'>
                            <img src={image7} alt="" />
                            <img src={image8} alt="" />
                        </div>
                        <br /><br /><br />
                    </div>
                </section>

                <section>
                    <H3>Testing and research</H3>
                    <Text>
                        These guidelines will help improve accessibility in your applications, but they don't guarantee a fully accessible experience. It is recommended you also: <br /><br />
                        Test the entire application and journeys using various assistive technologies and text scaling Include people with impairments when testing Ensure the tasks in your applications can be accomplished by anyone, regardless of ability
                    </Text>
                </section>

            </div >
        </div >
    )
}

export default Accessibility
