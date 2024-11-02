import '../styles/header.css'

import shoppingCartIcon from '../assets/svg/shopping.svg'
import burgerIcon from '../assets/svg/burger.svg'
import searchIcon from '../assets/svg/search.svg'
import arrow from '../assets/svg/arrow-right.svg'

function Header() {
    const navLink = ['Home', 'Product', 'Pricing', 'About']
    return (
        <div className="header">
            <div className='logo-container'>
                TrustLoop
            </div>
            <div className='navbar'>
                {navLink.map(link => <Navbutton key={link} text={link} />)}
            </div>
            <div className='shopping-icons'>
                <img src={ searchIcon} alt="" />
                <img src={shoppingCartIcon} alt="" />
                <img src={burgerIcon} alt="" />
            </div>
            <div className='header-button-container'>
                <div className='login'>login</div>
                <button> Become a Member  <img src={arrow}/></button>
            </div>
        </div>
    )
}

// eslint-disable-next-line react/prop-types
function Navbutton({ text }) {
    return (
        <div className='nav-button'>
            {text}
        </div>
    );
}


export default Header;