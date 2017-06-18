import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

const featuresData = [
  { title: 'JSX', content: 'Make your app with JSX components really fast!', name: 'thumbs-up'},
  { title: 'Performance', content: 'React is 2.5x time faster than AngularJS!', name: 'bolt'},
  { title: 'Elastic', content: 'With no effort you can customize your app!', name: 'wrench'},
  { title: 'Stability', content: 'Gives you huge stability with thousands of components', name: 'diamond'}
];

const FeaturesItem = (props) =>
  <Col className="features-content" xs={6} sm={3} md={3} lg={3}>
    <FontAwesome name={props.name} size='4x' />
    <h3 className="h4">{props.title}</h3>
    <p className="features-textContent">{props.content}</p>
  </Col>;


export const Features = () => {

    return (
<section id="features">
  <Grid fluid={true} className="features-container">
      <Row className="features-spec">
        <Col xs={12} md={12} lg={12}>
          <h2 className="h3">Why React?</h2>
          <p className="features-info">Just give it a try and u will love it!</p>
        </Col>
        {featuresData.map((info, i) =>
          <FeaturesItem key={i} {...info}/>
        )}
      </Row>
  </Grid>
</section>
)

}
