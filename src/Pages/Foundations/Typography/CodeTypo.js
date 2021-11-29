import React from 'react'
import CodepenTry from '../../../Components/Content/CodepenTry'
import { Heading3 as H3, Heading4 as H4 } from '../../../Components/Content/Heading'
import CodeText, { CodeTextAsh } from '../../../Components/Content/CodeText'
import Text from '../../../Components/Content/Text'
import Caption from '../../../Components/Content/Caption'

const CodeTypo = () => {
    return (
        <div>
            <div className='space-y-10     '>
                <section>
                    <H3>Props</H3>
                    <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo</Text>
                    <br /><br />
                    <div className=' space-x-3'>
                        <CodeText className='mr-10'>heading</CodeText>
                        <CodeTextAsh className=''>h1</CodeTextAsh>
                        <CodeTextAsh className=''>h2</CodeTextAsh>
                        <CodeTextAsh className=''>h3</CodeTextAsh>
                        <CodeTextAsh className=''>h4</CodeTextAsh>
                        <CodeTextAsh className='ml-10'>h5</CodeTextAsh>
                        <CodeTextAsh className=''>h6</CodeTextAsh>
                    </div>
                    <br /><br />
                    <div></div>
                    <Caption className="text-xs text-gray-400">Here are two examples of a 3 column fixed grid with a margin of 42 and a gutter of 20. The column width is set at 42. As you can see on a narrow screen, it can fill the entire width, while on a wider one, it will leave space on the sides.</Caption>
                </section>
                
                <section>
                    <H4 className='inline'>Text</H4>
                    <CodeText className='mx-10'>span</CodeText>
                    <br /><br />
                    <div></div>
                    <Caption className="text-xs text-gray-400">Here are two examples of a 3 column fixed grid with a margin of 42 and a gutter of 20. The column width is set at 42. As you can see on a narrow screen, it can fill the entire width, while on a wider one, it will leave space on the sides.</Caption>
                </section>

                <section>
                    <H4 className='inline'>Paragraph</H4>
                    <CodeText className='mx-10'>p</CodeText>
                    <br /><br />
                    <div></div>
                    <Caption className="text-xs text-gray-400">Here are two examples of a 3 column fixed grid with a margin of 42 and a gutter of 20. The column width is set at 42. As you can see on a narrow screen, it can fill the entire width, while on a wider one, it will leave space on the sides.</Caption>
                </section>

                <section>
                    <H4 className='inline'>Link</H4>
                    <CodeText className='mx-10'>a</CodeText>
                    <br /><br />
                    <div></div>
                    <Caption className="text-xs text-gray-400">Here are two examples of a 3 column fixed grid with a margin of 42 and a gutter of 20. The column width is set at 42. As you can see on a narrow screen, it can fill the entire width, while on a wider one, it will leave space on the sides.</Caption>
                </section>
                <div>
                    <CodepenTry />
                    <br />
                    <br />
                    <div>
                        <p className="codepen" data-editable data-height="300" data-default-tab="js,result" data-slug-hash="qBPWNrV" data-user="Kainy3" style={{ height: "300px", boxSizing: "border-box", display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid", margin: "1em 0", padding: "1em" }}>
                            <span>See the Pen <a href="https://codepen.io/Kainy3/pen/qBPWNrV">
                                Untitled</a> by Kainy (<a href="https://codepen.io/Kainy3">@Kainy3</a>)
                                on <a href="https://codepen.io">CodePen</a>.</span>
                        </p>
                        <script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>
                    </div>
                    <br />

                </div>

                <section>
                    <CodeText className='mr-2'>strong</CodeText>
                    <CodeText className='mx-2'>small</CodeText>
                    <CodeText className='mx-2'>pre</CodeText>
                    <br /><br />
                    <div></div>
                    <Caption className="text-xs text-gray-400">Here are two examples of a 3 column fixed grid with a margin of 42 and a gutter of 20. The column width is set at 42. As you can see on a narrow screen, it can fill the entire width, while on a wider one, it will leave space on the sides.</Caption>
                </section>
                <section>
                    <CodeText className='mr-2'>code</CodeText>
                    <br /><br />
                    <div></div>
                    <Caption className="text-xs text-gray-400">Here are two examples of a 3 column fixed grid with a margin of 42 and a gutter of 20. The column width is set at 42. As you can see on a narrow screen, it can fill the entire width, while on a wider one, it will leave space on the sides.</Caption>
                </section>

                <section>
                    <H4 className='inline'>Ordered List</H4>
                    <CodeText className='mx-10'>ol</CodeText>
                    <div className='inline space-x-3'>
                        <CodeTextAsh className=''>size</CodeTextAsh>
                    </div>
                    <br /><br />
                    <div></div>
                    <Caption className="text-xs text-gray-400">Here are two examples of a 3 column fixed grid with a margin of 42 and a gutter of 20. The column width is set at 42. As you can see on a narrow screen, it can fill the entire width, while on a wider one, it will leave space on the sides.</Caption>
                </section>

                <section>
                    <H4 className='inline'>List Item </H4>
                    <CodeText className='mx-10'>li</CodeText>
                    <div className='inline space-x-3'>
                        <CodeTextAsh className=''>icon</CodeTextAsh>
                        <CodeTextAsh className=''>iconColor</CodeTextAsh>
                        <CodeTextAsh className=''>size</CodeTextAsh>
                    </div>
                    <br /><br />
                    <div></div>
                    <Caption className="text-xs text-gray-400">Here are two examples of a 3 column fixed grid with a margin of 42 and a gutter of 20. The column width is set at 42. As you can see on a narrow screen, it can fill the entire width, while on a wider one, it will leave space on the sides.</Caption>
                </section>
            </div>
        </div>
    )
}

export default CodeTypo
