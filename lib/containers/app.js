import React, { Component } from 'react';
import Scroll from 'react-scroll';
import Header from '../components/Header';
import About from '../components/About';
import Projects from '../components/Projects';

export default class App extends Component {

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
        <Projects />
      </div>
    );
  }
}
