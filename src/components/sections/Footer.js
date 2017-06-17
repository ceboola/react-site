import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-bootstrap';

export class Footer extends Component {
  render() {
    return (
<footer>
  <Grid fluid={true}>
      <Row>
        <Col className="footer" xs={12} md={12} lg={12}>

        </Col>
      </Row>
  </Grid>
</footer>
)
  }
}
