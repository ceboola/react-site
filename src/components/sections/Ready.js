import React, { Component } from 'react';
import { Grid, Col, Row, Button } from 'react-bootstrap';

export class Ready extends Component {

  render() {

    return (
      <Grid className="ready" fluid={true}>
        <Row>
          <Col xs={12} md={12} lg={12}>
            <Grid fluid={false}>
              <h2 className="h5">Ready to start your journey?</h2>
              <Button bsStyle="primary-ready" bsSize="large">Let's go!</Button>
            </Grid>
          </Col>
        </Row>
      </Grid>

)
  }
}

Button.propTypes = {
  bsStyle: React.PropTypes.oneOf(["success","warning","danger","info","default","primary", "primary-ready", "primary-video", "link"])
}
