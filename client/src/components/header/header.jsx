import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
import icon1 from './carr.svg'

const Header = () => {
  return (
    <>
      <div className="header-top">
        <p className="header-message">MediX - Sizning salomatligingiz biz uchun muhim!</p>
        <p className="emergency-line">
         <img className='icon' src={icon1} alt="" />
         
            Favqulotda yordam liniyasi (+998) 78-333-03-03</p>
      </div>
      <nav className="header">
        <div className="logo">
          <Link to="/">
            <img src="http://medix.acrothemes.com/wp-content/themes/medix/images/logo.png" alt="Medica Logo" />
          </Link>
        </div>
        <div className="nav-links">
          <Link to="/">Asosiy</Link>
          <Link to="/about">Biz haqimizda</Link>
          <Link to="/doctors">Doktorlar</Link>
          <Link to="/news">Yangiliklar</Link>
          <Link to="/services">Bizning servislar</Link>
          <Link to="/contact">Kontakt</Link>
        </div>
        <div className="login">
          <Link to="/appointment">Qabulga yoziling</Link>
        </div>
      </nav>
    </>
  );
}

export default Header;
