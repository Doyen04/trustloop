import './assets/font/Staatliches-Regular.ttf'
import './assets/font/CPMono_v07Black.ttf.woff'

import Header from './component/header'
import Mainbody from './component/mainbody'
import Clients from './component/client'
import Strategy from './component/strategy'

function App() {

    return (
        <>
            <Header />
            <Mainbody/>
            <Strategy/>
            <Clients/>
        </>
    )
}

export default App
