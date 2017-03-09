import React, { Component } from 'react';
import MainTitle from './MainTitle';


const Header = (props) => {

  return (
    <header>
      <div className='main-header-wrapper'>
        <MainTitle />
        <img id='main-macbook-img' src={'../../css/images/macbook_pro_2.png'} />
        <button
          id='scroll-btn'
          type='button'
          onClick={ props.scrollToAbout }>
        </button>
        <h4 className='header-to-scroll'>
          Click to scroll
        </h4>
      </div>
    </header>
  );
};

export default Header;