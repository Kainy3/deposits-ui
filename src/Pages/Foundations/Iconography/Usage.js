import React from 'react'
import { Heading3 as H3, Heading4 as H4 } from '../../../Components/Content/Heading'
import Text from '../../../Components/Content/Text'

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
            </section>
            <section>
                <H3>Do's &amp; Don'ts</H3>
                <Text>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                </Text>
            </section>
            <section>
                <H3>Styling </H3>
                <Text>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                </Text>
                <div>
                    <H4>Variation</H4>
                    <Text>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                    </Text>
                </div>
                <div>
                    <H4>Color</H4>
                    <Text>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                    </Text>
                </div>
                <div>
                    <H4>Size</H4>
                    <Text>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                    </Text>
                </div>
            </section>
        </div>
    )
}

export default Usage
