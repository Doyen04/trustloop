import './assets/font/Staatliches-Regular.ttf'
import './assets/font/CPMono_v07Black.ttf.woff'

import Header from './component/header'
import Mainbody from './component/mainbody'
import Clients from './component/client'
import Strategy from './component/strategy'
import Pricing from './component/pricing'
import Subscribe from './component/subscribe'

function App() {

    return (
        <>
            <Header />
            <Mainbody/>
            <Strategy/>
            <Clients/>
            <Pricing/>
            <Subscribe/>
        </>
    )
}

export default App
