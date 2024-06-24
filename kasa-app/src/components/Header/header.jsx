
import './header.scss';
import logo from '../../assets/logo.png';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();

  return (
    <header className='header-kasa'>
      <div className='headnavcontainer'>
        <img src={logo} alt="Logo de Kasa" className="logo-kasa" />
        <nav className='navbar'>
          <ul>
            <Link
              to="/"
              className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
            >
              Accueil
            </Link>
            <Link
              to="/Apropos"
              className={`nav-link ${location.pathname === '/Apropos' ? 'active' : ''}`}
            >
              A propos
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
