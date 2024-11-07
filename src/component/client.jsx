
import '../styles/client.css'

import star from '../assets/svg/yellowstar.svg'
import halfstar from '../assets/svg/half-filled-star.svg'
import maleprofile from '../assets/img/male-profile.png'
import femaleprofile from '../assets/img/female-profile.png'

function Clients() {
    return (
        <div className='clients'>
            <div className='clients-text-description'>
                <pre>What</pre>
                <pre> Clients Say</pre>
                <div>
                    Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
                </div>
            </div>
            <div className='clients-list'>
                <div className='customers-review' >
                    <div className="star-container">
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={halfstar} alt="" />
                    </div>
                    <pre>
                        TrustLoop helps you see how many <br />
                        more days you need to work to <br />
                        reach your financial goal <br />
                    </pre>
                    <div className="customer-profile-container">
                        <img src={maleprofile} alt="" />
                        <div className="customer-name-container">
                            <div className="name">Regina Miles</div>
                            <div className="job">Designer</div>
                        </div>
                    </div>
                </div>
                <div className='customers-review' >
                    <div className="star-container">
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={halfstar} alt="" />
                    </div>
                    <pre>
                        TrustLoop helps you see how many <br />
                        more days you need to work to <br />
                        reach your financial goal <br />
                    </pre>
                    <div className="customer-profile-container">
                        <img src={maleprofile} alt="" />
                        <div className="customer-name-container">
                            <div className="name">Regina Miles</div>
                            <div className="job">Designer</div>
                        </div>
                    </div>
                </div>
                <div className='customers-review' >
                    <div className="star-container">
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={halfstar} alt="" />
                        <img src={halfstar} alt="" />
                    </div>
                    <pre>
                        TrustLoop helps you see how many <br />
                        more days you need to work to <br />
                        reach your financial goal <br />
                    </pre>
                    <div className="customer-profile-container">
                        <img src={femaleprofile} alt="" />
                        <div className="customer-name-container">
                            <div className="name">Regina Miles</div>
                            <div className="job">Designer</div>
                        </div>
                    </div>
                </div>
                <div className='customers-review' >
                    <div className="star-container">
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={halfstar} alt="" />
                    </div>
                    <pre>
                        TrustLoop helps you see how many <br />
                        more days you need to work to <br />
                        reach your financial goal <br />
                    </pre>
                    <div className="customer-profile-container">
                        <img src={maleprofile} alt="" />
                        <div className="customer-name-container">
                            <div className="name">Regina Miles</div>
                            <div className="job">Designer</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Clients