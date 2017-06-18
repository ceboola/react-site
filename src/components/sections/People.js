import React from 'react';
import { Grid, Col, Row } from 'react-bootstrap';
import { Github } from './Github';

export const People = () => {

    return (
<section id="devs">
      <Grid className="people" fluid={true}>
        <Row>
          <h2 className="h3 sr-only">Meet our devs</h2>
          <Col xs={12} sm={6} md={4} lg={4}>
            <Github className="people-card blue" username="petehunt"></Github>
          </Col>

          <Col xs={12} sm={6} md={4} lg={4}>
            <Github className="people-card yellow" username="gaearon"></Github>
          </Col>

          <Col xs={12} sm={6} md={4} lg={4}>
            <Github className="people-card red" username="ryanflorence"></Github>
          </Col>

          <Col xs={12} sm={6} md={4} lg={4}>
            <Github className="people-card yellow" username="tomocchino"></Github>
          </Col>

          <Col xs={12} sm={6} md={4} lg={4}>
            <Github className="people-card red" username="satya164"></Github>
          </Col>

          <Col xs={12} sm={6} md={4} lg={4}>
            <Github className="people-card blue" username="mjackson"></Github>
          </Col>
        </Row>
      </Grid>
</section>
)

}
