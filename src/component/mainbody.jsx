import '../styles/mainbody.css'

import phone from '../assets/svg/phone-with-circle.svg'

function mainbody() {
    return (
        <div className='mainbody-container'>
            <div className='text-description'>
                <div className="description">
                    <span>Your Financial </span>
                    <span>Assistance</span>
                </div>
                <div className="sub-description">
                    <span>We know how large</span> 
                    <span>objects will act, but things</span> 
                    <span>on a small scale</span>
                </div>
                <div className="main-button-container">
                    <button className='get-quote-button'>
                        Get Quote Now
                    </button>
                    <button className='learn-more-button'>
                        Learn More
                    </button>
                </div>
            </div>
            <img src={phone} alt="" />
        </div>
    )
}

export default mainbody;