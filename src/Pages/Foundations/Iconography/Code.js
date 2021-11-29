import React from 'react'
import { Heading3 as H3, Heading4 as H4 } from '../../../Components/Content/Heading'
import CodeText, { CodeTextAsh } from '../../../Components/Content/CodeText'
import Text from '../../../Components/Content/Text'

const Code = () => {
    return (
        <div>
            <div>
                <H3>Implemetation</H3>
                <CodeText>import {`{Icon}`} from 'deposits-ui'</CodeText> <br />
                <CodeText>import {` {CardIcon, WalletIcon, CopyIcon}`} from 'swys-ui'</CodeText>
            </div>
            <div>
                <H4>Basic use</H4>

            </div>
            <div>
                <H3>Props</H3>
                <div className=' space-x-3'>
                    <CodeText className='mr-10'>variant</CodeText>
                    <CodeTextAsh className='border-gray-100 bg-grey_1'>filled</CodeTextAsh>
                    <CodeTextAsh className=''>line</CodeTextAsh>
                </div>
                <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo</Text>
                <br /><br />
                <div></div>
                <div className='space-x-3'>
                    <CodeText className='mr-10'>color</CodeText>
                    <CodeTextAsh className=''>success</CodeTextAsh>
                    <CodeTextAsh className=''>info</CodeTextAsh>
                    <CodeTextAsh className=''>warning</CodeTextAsh>
                    <CodeTextAsh className=''>error</CodeTextAsh>
                    <CodeTextAsh className='ml-10'>default</CodeTextAsh>
                    <CodeTextAsh className=''>disabled</CodeTextAsh>
                </div>
                <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo</Text>
                <br /><br />

                <div className=' space-x-3'>
                    <CodeText className='mr-10'>size</CodeText>
                  
                </div>
                <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo</Text>
                <br />
            </div>

        </div>
    )
}

export default Code
