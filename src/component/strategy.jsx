import '../styles/strategy.css'

import wheel from '../assets/svg/settings.svg'
import w_wheel from '../assets/svg/white-settings.svg'

function Strategy() {
    return (
        <div className='strategy'>
            <h1>Better Strategy with Quality Business</h1>
            <p>Problems trying to resolve between the two major realms of Classical physics</p>
            <div className="services-tab">
                <div className="service-tab">
                    <img src={wheel} alt="" />
                    <p>Support On Raising Funds</p>
                </div>
                <div className="service-tab" style={{backgroundColor: '#23A6F0',color:'white'}}>
                    <img src={w_wheel} alt="" />
                    <p>Investment Trading</p></div>
                <div className="service-tab">
                    <img src={wheel} alt="" />
                    <p>Financial Analysis</p></div>
            </div>
        </div>
    )
}

export default Strategy;