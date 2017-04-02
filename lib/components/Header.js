import React, { Component } from 'react';

import MainTitle from './MainTitle';


const Header = ({ scrollToAbout }) => {

  return (
    <header>
      <div className='main-header-wrapper'>
        <MainTitle />
        <img id='main-macbook-img'
          src={'images/macbook_pro_2.png'}
          alt='macbook type computer with text on screen'/>
        <button
          id='scroll-btn'
          type='button'
          onClick={ () => scrollToAbout() }>
        </button>
        <h4 className='header-to-scroll'>
          Click to scroll
        </h4>
      </div>
    </header>
  );
};

export default Header;