

import React, { Component } from 'react';
import { Grid, Col, Row, Button } from 'react-bootstrap';
import ReactPlayer from 'react-player';

export const VideoClip = class extends Component {
  render() {
    return (

  <Grid className="video" fluid={true}>
      <Row className="video-player">
        <Col className="video-content" xs={12} md={6} lg={6}>
          <h2 className="h3">How into?</h2>
          <p>It's really easy to use</p>
          <ul className="video-list">
            <li>Learn basic React concepts</li>
            <li>Understand how it works, it will freak your mind up</li>
            <li>Videos that are produced well generate a large number of backlinks to your website.</li>
          </ul>
          <Button bsStyle="primary-video" bsSize="large">Learn more on Youtube</Button>
        </Col>

        <Col xs={12} md={6} lg={6}>
          <div className="video-wrapper">
          <ReactPlayer
            url='https://www.youtube.com/watch?v=JPT3bFIwJYA'
            playing={false}
            width='90%'
            height='100%'
            className="player"/>
          </div>
        </Col>
      </Row>
  </Grid>

)
  }
}
