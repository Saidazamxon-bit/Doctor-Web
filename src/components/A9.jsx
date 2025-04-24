import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import "./A8.css"


const A9 = () => {
  const iconStyle = {
    width: '28px',
    height: '28px',
    border: '1px solid #5c5c5c',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#cfcfcf',
    textDecoration: 'none',
    transition: 'background 0.3s ease, transform 0.2s ease',
    
  };

  const hoverStyle = {
    backgroundColor: '#2c2c2c',
    transform: 'scale(1.1)',
  };

  return (



    
    <div className='Ijtimoiy-tr' style={{ display: 'flex', gap: '20px', justifyContent: 'center', backgroundColor: '#050b16', padding: '20px' }}>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={iconStyle}>
        <FaFacebookF />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={iconStyle}>
        <FaInstagram />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={iconStyle}>
        <FaLinkedinIn />
      </a><br /><br />
     
    </div>
  );
};

export default A9;
