import React from 'react';
import { Grid, Col, Row } from 'react-bootstrap';

export const HeaderSection = () => {

    return (
    <Grid fluid={true} className="App-header">
        <Row>
          <Col xs={12} md={12}>
            <div className="jumbo-text"><h2 className="h2">react is<br/>awesome<br/><p className="underline-hero">library</p></h2>
              <p className="header-text">You should learn it too!</p>
            </div>
          </Col>
        </Row>
    </Grid>
)

}
