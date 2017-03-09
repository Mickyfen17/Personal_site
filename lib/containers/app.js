import React, { Component } from 'react';
import Header from '../components/Header';
import About from '../components/About';

export default class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <About />
      </div>
    );
  }
}
