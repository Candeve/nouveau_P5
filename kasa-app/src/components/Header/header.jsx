
import './header.scss';
import logo from '../../assets/logo.png';
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    
    <header className='header-kasa'>
        <div className='headnavcontainer'>
      <img src={logo} alt="Logo de Kasa" className="logo-kasa" />
      <nav className='navbar'>
        <ul>
          
            <Link to="/" className='nav-link'>Accueil
            </Link>

          
            <Link to="/A_propos" className='nav-link'>A propos
            </Link>

        </ul>
      </nav>
      </div>
    </header>
    
  );
}

export default Header;
