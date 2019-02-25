import React from 'react';
import Thumbnail from '../Thumbnail';
import MainTitle from '../MainTitle';
import Button from '../Button';
import 'styles/header.scss';

const Header = ({ scrollToAbout }) => {
  return (
    <header>
      <div className="main-header-wrapper">
        <MainTitle />
        <Thumbnail
          classNames="main-macbook-img"
          imageId="images/macbook_pro.png"
          alt="macbook type computer with text on screen"
        />
        <Button
          id="scroll-btn"
          aria-label="click to scroll down"
          type="button"
          onClick={scrollToAbout}
        />
        <h4 className="header-to-scroll">Click to scroll</h4>
      </div>
    </header>
  );
};

export default Header;
