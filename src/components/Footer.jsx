import '../assets/styles/Footer.scss';
import {Link} from "react-router-dom";

function Footer() {
    return (
        <footer className='footer'>
            <div className='footer-container container'>
                <nav className='nav nav-footer'>
                    <ul className='nav-list text-18-14'>
                        <li>
                            <Link to="/terms" className='nav-list-link'>Voorwaarden</Link>
                        </li>
                        <li>
                            <Link to="/privacy-policy" className='nav-list-link'>Privacybeleid</Link>
                        </li>
                        <li>
                            <Link to="/cookie-policy" className='nav-list-link'>Cookie beleid</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
}

export default Footer;
