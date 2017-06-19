import React, { Component } from 'react';
import { Navbar, Nav, NavItem, /*NavDropdown, MenuItem*/ } from 'react-bootstrap';
import logo from './images/logo.svg';
import FontAwesome from 'react-fontawesome';
//import { LinkContainer } from 'react-router-bootstrap';
import ScrollAnim from 'rc-scroll-anim';


const Link = ScrollAnim.Link;
const EventListener = ScrollAnim.Event;
/*
const DirectLink = Scroll.DirectLink;
const Element = Scroll.Element;
const Events = Scroll.Events;
const scroll = Scroll.animateScroll;
const scrollSpy = Scroll.scrollSpy;


const durationFn = (deltaTop) => {
    return deltaTop;
};
*/

export class Navbarx extends Component {

    onFocus = (e) => {
      this.dom = e.target;
      this.barAnimate();
    }

    barAnimate = () => {
      if (!this.dom) {
        return;
      }
      const bar = this.refs.bar;
      bar.style.left = `${this.dom.getBoundingClientRect().left}px`;
    }

    updateDimensions = () => {
         const w = window,
              d = document,
              documentElement = d.documentElement,
              body = d.getElementsByTagName('body')[0],
              width = w.innerWidth || documentElement.clientWidth || body.clientWidth,
              height = w.innerHeight|| documentElement.clientHeight|| body.clientHeight;
              this.setState({width, height});
          }

          componentWillMount() {
              this.updateDimensions();
          }

          componentDidMount() {
              EventListener.addEventListener('resize.userResize', this.barAnimate.bind(this));
              window.addEventListener("resize", this.updateDimensions);
            }

          componentWillUnmount() {
              window.removeEventListener("resize", this.updateDimensions);
          }



      offsetMobile = () => {
      if(this.state.width>=1200) {
        return 87;
      } else if (this.state.width<=767) {
        return 50;
      } else if (this.state.width>=768 && this.state.width<=1199) {
        return 84;
      }
    }

    setNavExpanded = (expanded) => {
  this.setState({ navExpanded: expanded });
}

    closeNav = () => {
  this.setState({ navExpanded: false });
}

  render() {

  return (
    <Navbar fixedTop onToggle={this.setNavExpanded} expanded={this.state.navExpanded}>
<Navbar.Header>
  <Navbar.Brand>
    <h1 className="brand-logo-heading"><a href="#"><img src={logo} className="App-logo" alt="React App Site" /></a></h1>
  </Navbar.Brand>
  <Navbar.Toggle />
</Navbar.Header>
<Navbar.Collapse>
  <Nav className="default">


        <NavItem tabIndex={-1} eventKey={1} onSelect={this.closeNav}>
          <Link href="#aboutus" to="aboutus"
             active={'aboutus-active'}
             component={'a'}
             offsetTop={this.offsetMobile()}
             showHeightActive={['20%', '45%']}
             onFocus={this.onFocus}
             onBlur={this.onBlur}>About Us
           </Link>
         </NavItem>


        <NavItem tabIndex={-1} eventKey={2} onSelect={this.closeNav}>
          <Link href="#features" to="features"
            active={'features-active'}
            component={'a'}
            offsetTop={this.offsetMobile()}
            showHeightActive={['30%', '5%']}
            onFocus={this.onFocus}
            onBlur={this.onBlur}>Features
          </Link>
        </NavItem>

      <NavItem tabIndex={-1} eventKey={3} onSelect={this.closeNav}>
        <Link href="#devs" to="devs"
           active={'devs-active'}
           component={'a'}
           offsetTop={this.offsetMobile()}
           showHeightActive={['30%', '10%']}
           onFocus={this.onFocus}
           onBlur={this.onBlur}>Developers
         </Link>
       </NavItem>

      <NavItem tabIndex={-1} eventKey={4} onSelect={this.closeNav}>
        <Link href="#blog" to="blog"
           active={'blog-active'}
           component={'a'}
           offsetTop={this.offsetMobile()}
           showHeightActive={['30%', '50%']}
           onFocus={this.onFocus}
           onBlur={this.onBlur}>Blog
         </Link>
       </NavItem>

    <div ref="bar" className="nav-bar-underline hidden-xs" />
  </Nav>

  <Nav pullRight>
    <NavItem
      href="https://facebook.com"
      target="_blank"
      rel="noopener noreferrer"
      eventKey={1}
      aria-label="Facebook">
        <span className='fa-stack fa-lg'>
          <FontAwesome name='square-o' stack='2x'/><FontAwesome name='facebook' alt="" stack='1x' />
        </span>
     </NavItem>

    <NavItem
      href="https://twitter.com"
      target="_blank"
      rel="noopener noreferrer"
      eventKey={2}
      aria-label="Twitter">
        <span className='fa-stack fa-lg'>
          <FontAwesome name='square-o' stack='2x'/><FontAwesome name='twitter' stack='1x' />
        </span>
    </NavItem>

    <NavItem
      href="https://youtube.com"
      target="_blank"
      rel="noopener noreferrer"
      eventKey={3}
      aria-label="Youtube">
        <span className='fa-stack fa-lg'>
          <FontAwesome name='square-o' stack='2x'/><FontAwesome name='youtube' stack='1x' />
        </span>
    </NavItem>
  </Nav>
</Navbar.Collapse>
</Navbar>
  )
  }
}
