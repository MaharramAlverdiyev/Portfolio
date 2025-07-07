import React from 'react';
import './MALoading.css';
import logo from '../../Images/logo.png';

const MALoading = () => {
  return (
    <div className="loading-wrapper">
      <div className="rotating-logo">
        <img src={logo} alt="MA Logo" />
      </div>
    </div>
  );
};

export default MALoading;