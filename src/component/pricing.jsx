import '../styles/pricing.css'

import greencheck from '../assets/svg/greencheckedbox.svg'
import greycheck from '../assets/svg/checkedbox.svg'

function Pricing() {
    return (
        <div className='pricing'>
            <h1>Pricing</h1>
            <p>Problems trying to resolve the conflict between the two major realms of Classical physics</p>
            <div className='pricings-container'>
                <div className="pricings">
                    <h1>FREE</h1>
                    <p>Organize across all apps by hand</p>
                    <div className='price'>
                        <p>0</p>
                        <div className="sub-and-sup">
                            <p>$</p>
                            <p>Per Month</p>
                        </div>
                    </div>

                    <div className="plan-benefit">
                        <img src={greencheck} alt="" />
                        <p>Unlimited product updates</p>
                    </div>
                    <div className="plan-benefit">
                        <img src={greencheck} alt="" />
                        <p>Unlimited product updates</p>
                    </div>
                    <div className="plan-benefit">
                        <img src={greencheck} alt="" />
                        <p>Unlimited product updates</p>
                    </div>
                    <div className="plan-benefit">
                        <img src={greycheck} alt="" />
                        <p>1GB Cloud storage</p>
                    </div>
                    <div className="plan-benefit">
                        <img src={greycheck} alt="" />
                        <p>Email and community support</p>
                    </div>
                    <button className='try-for-free'>Try for free</button>
                </div>

                <div className="pricings">
                    <section className='floating-tag'>
                        New
                    </section>
                    <h1>Silver</h1>
                    <p>Organize across all apps by hand</p>
                    <div className='price'>
                        <p>9.99</p>
                        <div className="sub-and-sup">
                            <p>$</p>
                            <p>Per Month</p>
                        </div>
                    </div>

                    <div className="plan-benefit">
                        <img src={greencheck} alt="" />
                        <p>Unlimited product updates</p>
                    </div>
                    <div className="plan-benefit">
                        <img src={greencheck} alt="" />
                        <p>Unlimited product updates</p>
                    </div>
                    <div className="plan-benefit">
                        <img src={greencheck} alt="" />
                        <p>Unlimited product updates</p>
                    </div>
                    <div className="plan-benefit">
                        <img src={greycheck} alt="" />
                        <p>1GB Cloud storage</p>
                    </div>
                    <div className="plan-benefit">
                        <img src={greycheck} alt="" />
                        <p>Email and community support</p>
                    </div>
                    <button className='try-for-free'>Try for free</button>
                </div>
                <div className="pricings">
                    <h1>Gold</h1>
                    <p>Organize across all apps by hand</p>
                    <div className='price'>
                        <p>19.99</p>
                        <div className="sub-and-sup">
                            <p>$</p>
                            <p>Per Month</p>
                        </div>
                    </div>

                    <div className="plan-benefit">
                        <img src={greencheck} alt="" />
                        <p>Unlimited product updates</p>
                    </div>
                    <div className="plan-benefit">
                        <img src={greencheck} alt="" />
                        <p>Unlimited product updates</p>
                    </div>
                    <div className="plan-benefit">
                        <img src={greencheck} alt="" />
                        <p>Unlimited product updates</p>
                    </div>
                    <div className="plan-benefit">
                        <img src={greycheck} alt="" />
                        <p>1GB Cloud storage</p>
                    </div>
                    <div className="plan-benefit">
                        <img src={greycheck} alt="" />
                        <p>Email and community support</p>
                    </div>
                    <button className='try-for-free'>Try for free</button>
                </div>

            </div>
        </div>
    )
}

export default Pricing;