import CardFront from './Components/CardFront'
import CardBack from './Components/CardBack'
function App() {
    return (
        <div className="App flex h-screen w-screen flex-col md:flex-row">
            <div className="relative h-1/3 w-full bg-[url('./assets/bg-main-mobile.png')] bg-cover bg-no-repeat md:h-screen md:w-1/3 md:bg-[url('./assets/bg-main-desktop.png')]">
                <div className="relative mx-auto my-0 h-full w-full max-w-sm">
                    <CardBack />
                    <CardFront />
                </div>
            </div>
            <div className="h-[75%] w-full bg-white md:h-screen md:w-2/3"></div>
        </div>
    )
}

export default App
