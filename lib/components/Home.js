import React from 'react';
import Scroll from 'react-scroll';

import Header from '../components/Header';
import About from '../components/About';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

const Home = () => {

  const scrollToAbout = () => {
    Scroll.scroller.scrollTo('about', {
      durcation: 1000,
      delay: 250,
      smooth: true,
    });
  };

  return (
    <section>
      <Header scrollToAbout={ scrollToAbout } />
      <About />
      <Projects />
      <Footer />
    </section>
  );
};

export default Home;