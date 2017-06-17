import React, { Component } from 'react';
import './App.css';
//import { Router, Route, Switch } from 'react-router';
import { Navbarx, AboutUs, HeaderSection, Features, Footer, ParallaxBG, VideoClip, People, Ready, LatestNews, Opinions, Contact} from './components/sections';
import ScrollAnim from 'rc-scroll-anim';

const Element = ScrollAnim.Element;


class App extends Component {

  render() {

    return (
      <div className="App">
        <header>
          <Navbarx />
          <HeaderSection />
        </header>
            <Element className="pack-page aboutus" id="aboutus" onChange={this.onChange}><AboutUs /></Element>
            <Features />
            <ParallaxBG />
            <VideoClip />
            <People />
            <Opinions />
            <Ready />
            <LatestNews />
            <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
