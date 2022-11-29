import CardFront from './Components/CardFront'
import CardBack from './Components/CardBack'
import { Wrapper, ImgBg, WhiteBg } from './styles/'
function App() {
    return (
        <div className="App flex h-screen w-screen flex-col md:flex-row">
            <ImgBg>
                <Wrapper>
                    <CardBack />
                    <CardFront />
                </Wrapper>
            </ImgBg>
            <WhiteBg>
                <Wrapper></Wrapper>
            </WhiteBg>
        </div>
    )
}

export default App
