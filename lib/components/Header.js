import React, { Component } from 'react';
import Scroll from 'react-scroll';
import MainTitle from './MainTitle';


export default class Header extends Component {

  scrollToAbout() {
    Scroll.scroller.scrollTo('about', {
      durcation: 1000,
      delay: 250,
      smooth: true,
    });
  }
  render() {
    return (
      <header>
        <div className='main-header-wrapper'>
          <MainTitle />
          <img id='main-macbook-img' src={'../../css/images/macbook_pro_2.png'} />
          <button id='scroll-btn' type='button' onClick={() => this.scrollToAbout()}></button>
          <h4 className='header-to-scroll'>Click to scroll</h4>
        </div>
      </header>
    );
  }
}