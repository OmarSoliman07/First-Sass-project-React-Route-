import React from 'react';
import logo from '../../assets/logo-BfNap0Pe.png';
import './Footer.scss';

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <a href="/" className='footer-link'>
          <img src={logo} alt="logo" className='footer-img1' />
          <p className='FooterName'>Recipe</p>
        </a>
        <div className='footer-content-2'>
          <p>Route</p>
        </div>
      </div>
      <hr />
      <p className='last'>© 2025 Omar Soliman™. All Rights Reserved.</p>
    </footer>
  );
}