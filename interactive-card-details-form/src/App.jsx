import CardFront from './Components/CardFront'
import CardBack from './Components/CardBack'
import Form from './Components/Form'
import { Wrapper, ImgBg, WhiteBg } from './styles/'
import tw from 'twin.macro'
function App() {
    return (
        <div className="App flex  h-screen w-screen flex-col md:flex-row">
            <ImgBg>
                <Wrapper>
                    <CardBack />
                    <CardFront />
                </Wrapper>
            </ImgBg>
            <WhiteBg css={tw``}>
                <Wrapper css={tw``}>
                    <Form />
                </Wrapper>
            </WhiteBg>
        </div>
    )
}

export default App
