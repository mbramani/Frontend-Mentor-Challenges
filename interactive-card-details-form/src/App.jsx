import { useState } from 'react'
import CardFront from './Components/CardFront'
import CardBack from './Components/CardBack'
import Form from './Components/Form'
import { Wrapper, ImgBg, WhiteBg } from './styles/'
import bgMobile from './assets/bg-main-mobile.png'
import bgDesktop from './assets/bg-main-desktop.png'
function App() {
    const defaultData = [
        {
            id: 'card-holder-name',
            name: 'Name',
            focus: false,
            value: '',
            limit: 18,
            error: '',
        },
        {
            id: 'card-number',
            focus: false,
            name: 'Card Number',
            value: '',
            limit: 19,
            error: '',
        },
        {
            id: 'card-exp-mm',
            name: 'Expiry month',
            focus: false,
            value: '',
            limit: 2,
            error: '',
        },
        {
            id: 'card-exp-yy',
            name: 'Expiry year',
            focus: false,
            value: '',
            limit: 2,
            error: '',
        },
        {
            id: 'card-cvv',
            name: 'Cvv',
            focus: false,
            value: '',
            limit: 3,
            error: '',
        },
    ]
    const [inputFields, setInputFields] = useState(defaultData)
    const [isFormSubmitted, setIsFormSubmitted] = useState(false)

    const setDefaultData = () => setInputFields(defaultData)
    const css = {
        'background-image': `url(${bgMobile})`,
        '@media (min-width: 768px)': {
            'background-image': `url(${bgDesktop})`,
        },
    }
    return (
        <div className="App flex h-screen w-screen flex-col md:flex-row">
            <ImgBg css={css}>
                <Wrapper>
                    <CardBack inputFields={inputFields} />
                    <CardFront inputFields={inputFields} />
                </Wrapper>
            </ImgBg>
            <WhiteBg>
                <Wrapper>
                    <Form
                        inputFields={inputFields}
                        setInputFields={setInputFields}
                        isFormSubmitted={isFormSubmitted}
                        setIsFormSubmitted={setIsFormSubmitted}
                        setDefaultData={() => setDefaultData()}
                    />
                </Wrapper>
            </WhiteBg>
        </div>
    )
}

export default App
