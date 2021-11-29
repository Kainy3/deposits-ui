import React from 'react'
import { Heading3 as H3 } from '../../../Components/Content/Heading'
import Text from '../../../Components/Content/Text'
// import CodeText from '../../../Components/Content/CodeText'
import typography from '../../../Assets/Foundations/Typography/typography.svg'
import image1 from '../../../Assets/Foundations/Typography/Group6296.svg'
import image2 from '../../../Assets/Foundations/Typography/Group6297.svg'

const UsageTypo = () => {
    const tables = [
        { element: 'h1', class: 'font-light text-4xl ', weight: 'light', size: '56', case: 'Sentence', font: 'Hero New' },
        { element: 'h2', class: ' text-3xl', weight: 'regular', size: '48', case: 'Sentence', font: 'Hero New' },
        { element: 'h3', class: 'font-bold text-2xl', weight: 'semibold', size: '36', case: 'Sentence', font: 'Hero New' },
        { element: 'h4', class: ' text-xl', weight: 'medium', size: '28', case: 'Sentence', font: 'Hero New' },
        { element: 'h5', class: 'font-semibold text-lg', weight: 'semibold', size: '24', case: 'Sentence', font: 'Hero New' },
        { element: 'h6', class: 'text-base', weight: 'medium', size: '20', case: 'Sentence', font: 'Hero New' },
        { element: 'Subtitle 1', class: 'font-semibold', weight: 'semibold', size: '16', case: 'Sentence', font: 'Hero New' },
        { element: 'Subtitle 2', class: '', weight: 'medium', size: '14', case: 'Sentence', font: 'Hero New' },
        { element: 'Body 1', class: '', weight: 'book', size: '16', case: 'Sentence', font: 'circular std' },
        { element: 'body 2', class: '', weight: 'book', size: '14', case: 'Sentence', font: 'circular std' },
        { element: 'button', class: '', weight: 'medium', size: '14', case: 'Sentence', font: 'Hero New' },
        { element: 'caption', class: 'text-gray-600 font-serif', weight: 'light', size: '12', case: 'Sentence', font: 'Hero New' },
        { element: 'overline', class: 'text-gray-600 text-xs uppercase', weight: 'book', size: '10', case: 'all caps ', font: 'circular std' }
    ]
    const isOdd = (num) => num % 2 === 0 ? false : true


    return (
        <div className='my-12 space-y-12'>
            <div>


                <section>
                    <H3>
                        Introduction
                    </H3>
                    <Text >
                        Typography is the art of arranging letters and text in a way that makes the copy legible, clear, and visually appealing to the reader. Typography involves font style, appearance, and structure, which aims to elicit certain emotions and convey specific messages. In short, typography is what brings the text to life.
                        <br /> <br />
                        Typography is so much more than just choosing beautiful fonts: it’s a vital component of user interface design. Good typography will establish a strong visual hierarchy, provide a graphic balance to the website, and set the product’s overall tone. Typography should guide and inform your users, optimize readability and accessibility, and ensure an excellent user experience.
                        <div><img src="" alt="" /></div>
                        <br />
                        <div><img src={typography} alt="" /></div>
                        <br />
                        <b> Cap-height:</b> The height of the capital letter. <br />
                        <b> X-height:</b> The height of lowercase x is as a default value for other, less uniform lowercase letters. <br />
                        <b> Descent:</b> All elements below our x-height. <br />
                        Baseline: The baseline is a flat surface on which our font is sitting. <br />
                        <b> Ascent: </b>All elements above our x-height.
                    </Text>
                </section>

                <section>
                    <H3>Deposits Fonts &amp; Typeface</H3>
                    <Text>
                        A typeface is a design style which comprises a myriad of characters of varying sizes and weight, whereas a font is a graphical representation of text character.
                        <br /><br />
                        The default typeface in Swys ui are Circular Std and Hero New.
                        <div classname='flex'>
                            <img src="" alt="" />
                            <img src="" alt="" />
                        </div>      <br /><br />
                        <div className='space-x-10 flex'>
                            <img src={image2} alt="" />
                            <img src={image1} alt="" />
                        </div>
                        <br />
                    </Text>
                </section>

            </div>
            br
            <section>
                <H3>Type scale</H3>
                <Text>
                    Type scale emphasizes on the typeface for all headlines, subtitles, body, and captions, creating a cohesive typography experience. Hierarchy is communicated through differences in font weight, size, letter spacing, and case. The table below shows our type scale across our products
                    <br />
                </Text>
                <br /><br />
                <div className='capitalize'>
                    <div className='bg-blue-600  text-white p-3 rounded flex w-full justify-evenly'>
                        <div className='w-28'>
                            <p>Scale</p>
                        </div>
                        <div className='w-28'>
                            <p>Typeface</p>
                        </div>
                        <div className='w-28'>
                            <p>Weight</p>
                        </div>
                        <div className='w-28'>
                            <p>Size</p>
                        </div>
                        <div className='w-28'>
                            <p>Case</p>
                        </div>
                    </div>
                    {tables.map((table, index) => (
                        <div className={`${isOdd(index) && 'bg-grey_1'} h-14 text-gray-600 text-xs rounded flex w-full justify-evenly`}>
                            <div className='w-28 text-black flex items-center'>
                                <h1 className={`${table.class}`}>{table.element}</h1>
                            </div>
                            <div className='w-28 flex items-center'>
                                <p className='my-auto'>{table.font}</p>
                            </div>
                            <div className='w-28 flex items-center'>
                                <p>{table.weight}</p>
                            </div>
                            <div className='w-28 flex items-center'>
                                <p>{table.size}</p>
                            </div>
                            <div className='w-28 flex items-center'>
                                <p>{table.case}</p>
                            </div>
                        </div>

                    ))}
                </div>
            </section>
        </div>
    )
}

export default UsageTypo
