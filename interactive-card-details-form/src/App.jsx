import CardFront from './Components/CardFront'
import CardBack from './Components/CardBack'
function App() {
    return (
        <div className="flex flex-col w-screen h-screen App md:flex-row">
            <div className="relative w-full h-1/3 md:w-1/3 md:h-screen bg-cover bg-no-repeat bg-[url('./assets/bg-main-mobile.png')] md:bg-[url('./assets/bg-main-desktop.png')]">
                <div className="relative w-full h-full max-w-sm mx-auto my-0">
                    <CardBack />
                    <CardFront />
                </div>
            </div>
            <div className="w-full bg-white h-[75%] md:w-2/3 md:h-screen"></div>
        </div>
    )
}

export default App
