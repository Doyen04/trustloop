import '../styles/subscribe.css'

function Subscribe() {
    return (
        <div className='subscribe'>
            <div className='subscribe-heading'>
                <h1>Get in Touch</h1>
                <p>
                    The gradual accumulation of information about atomic and small-scale behaviour during the
                    quarter of the 20th
                </p>
            </div>
            <div className="email-submit-container">
                <input type="email" name="email" placeholder='Your Email' id="" />
                <input type="button" value="Subscribe" />
            </div>
        </div>
    )
}

export default Subscribe