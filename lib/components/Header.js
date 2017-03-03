import React, { Component } from 'react';
import MainTitle from './MainTitle';


const Header = () => {

  return (
    <header>
      <div className='main-header-wrapper'>
        <MainTitle />
        <img id='main-macbook-img' src={'../../css/images/macbook_pro_2.png'} />
      </div>
    </header>
  );
};

export default Header;