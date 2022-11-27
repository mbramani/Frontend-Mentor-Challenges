import CardFront from './Components/CardFront'
function App() {
    return (
        <div className="App flex h-screen w-screen flex-col md:flex-row">
            <div className="relative w-full h-1/3 md:w-1/3 md:h-screen bg-cover bg-no-repeat bg-[url('./assets/bg-main-mobile.png')] md:bg-[url('./assets/bg-main-desktop.png')]">
                <CardFront />
            </div>
            <div className="w-full h-2/3 md:w-2/3 md:h-screen bg-white"></div>
        </div>
    )
}

export default App
