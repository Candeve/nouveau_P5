import './footer.scss';
import logo from '../../assets/logo-footer.png'

function Footer(){
    return(
        <footer className='footerAll'>
            <div className='footer-wrapper'>
                <img src={logo} alt='Logo de Kasa' className='logo-footer'></img>
                <p className='texte-footer'>© 2020 Kasa. All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer;