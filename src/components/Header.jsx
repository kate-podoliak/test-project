import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/img/logo.webp';
import '../assets/styles/Header.scss';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    useEffect(() => {
        const hash = location.hash;
        if (hash) {
            const element = document.querySelector(hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
        closeMenu();
    }, [location]);

    return (
        <header className='header'>
            <div className='header-container container'>
                <div className='logo-container'>
                    <Link to="/NotFound">
                        <img src={logo} alt="Logo" className='logo' />
                    </Link>
                </div>
                <button className={`burger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <span className="burger-line"></span>
                    <span className="burger-line"></span>
                    <span className="burger-line"></span>
                </button>
                <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
                    <button className="nav-close" onClick={closeMenu}>&times;</button>
                    <ul className='nav-list text-18-14'>
                        <li>
                            <Link to="/#home" className='nav-list-link' onClick={closeMenu}>Thuis</Link>
                        </li>
                        <li>
                            <Link to="/#about" className='nav-list-link' onClick={closeMenu}>Over ons</Link>
                        </li>
                        <li>
                            <Link to="/#accommodation" className='nav-list-link' onClick={closeMenu}>Accommodatie</Link>
                        </li>
                        <li className='nav-list-item'>
                            <Link to="/#restaurants" className='nav-list-link' onClick={closeMenu}>Restaurants en Culinair</Link>
                        </li>
                        <li>
                            <Link to="/#art" className='nav-list-link' onClick={closeMenu}>Kunst</Link>
                        </li>
                        <li>
                            <Link to="/playroom" className='nav-list-link' onClick={closeMenu}>Speelkamer</Link>
                        </li>
                        <li>
                            <Link to="/contacts" className='nav-list-link' onClick={closeMenu}>Contacten</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
