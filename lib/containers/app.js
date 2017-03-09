import React, { Component } from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Scroll from 'react-scroll';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  scrollToAbout() {
    Scroll.scroller.scrollTo('about', {
      durcation: 1000,
      delay: 250,
      smooth: true,
    });
  }

  render() {
    return (
      <div>
        <Header scrollToAbout={ () => this.scrollToAbout() } />
        <About />
      </div>
    );
  }
}
