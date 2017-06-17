import React, { Component } from 'react';
import { Grid, Col, Row, Image, Button } from 'react-bootstrap';
import { Parallax, Background } from 'react-parallax';
import telephone2 from './images/telephone2.jpg';

export class ParallaxBG extends Component {

  render() {

    return (
      <Grid className="parallax-container" fluid={true}>
        <Row>
          <Col xs={12} md={12} lg={12}>
            <Parallax strength={200}>
      		    <Background>
      		        <Image src={telephone2} alt="" responsive />
      		    </Background>
                <div className="parallax-content">
      		        <h2 className="h3">Mobile traffic<br /> growing every year</h2>
                  <span className="asd">Every app should now focus on mobile devices, React offers native experience as standard feature.</span>
                  <Button bsStyle="primary-video" bsSize="large">Learn more</Button>
                </div>
      		  </Parallax>

          </Col>
        </Row>
      </Grid>

)
  }
}
