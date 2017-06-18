import React from 'react';
import { Grid, Col, Row, Well } from 'react-bootstrap';
import konick from './images/konick.svg';

export const AboutUs = () => {

    return (
<section id="aboutus">
  <Grid fluid={true}>
      <Row className="aboutus-whatWeOffer">
        <Col className="redux-card" xs={12} sm={4} md={4} lg={4}>
          <Well className="aboutus-card">
            <p className="aboutus-card-titleText">Redux</p>
            <p className="aboutus-card-contentText">
              Redux is a predictable state container for JavaScript apps. To rephrase that, it’s an application data-flow architecture, rather than a traditional library or a framework like Underscore.js and AngularJS.
            </p>
            <ul className="aboutus-list">
              <li>UI Design</li>
              <li>Mobile & Responsive Optimization</li>
              <li>UX Prototypes</li>
            </ul>
          </Well>
        </Col>

        <Col className="flux-card" xs={12} sm={4} md={4} lg={4}>
          <Well className="aboutus-card">
            <p className="aboutus-card-titleText">Flux</p>
            <p className="aboutus-card-contentText">
              Flux is an architecture that Facebook uses internally when working with React. It is not a framework or a library. It is simply a new kind of architecture that complements React and the concept of Unidirectional Data Flow.
            </p>
            <ul className="aboutus-list">
              <li>UI Design</li>
              <li>Mobile & Responsive Optimization</li>
              <li>UX Prototypes</li>
            </ul>
          </Well>
        </Col>

        <Col className="native-card" xs={12} sm={4} md={4} lg={4}>
          <Well className="aboutus-card">
            <p className="aboutus-card-titleText">Native</p>
            <p className="aboutus-card-contentText">
              React Native lets you build mobile apps using only JavaScript. It uses the same design as React, letting you compose a rich mobile UI from declarative components.
            </p>
            <ul className="aboutus-list">
              <li>UI Design</li>
              <li>Mobile & Responsive Optimization</li>
              <li>UX Prototypes</li>
            </ul>
          </Well>
        </Col>
      </Row>

      <Row className="aboutus-whatWeDo">
        <Col className="aboutus-svg" xs={12} md={6} lg={6}>
          <img src={konick} className="" alt="" />
        </Col>

        <Col className="aboutus-side" xs={12} md={6} lg={6}>
          <h2 className="h4">It's Responsive!</h2>
          <p>You can easily make your app's becomes native</p>
        </Col>
      </Row>
  </Grid>
</section>
)

}
