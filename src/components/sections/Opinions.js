import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-bootstrap';
import Slider from 'react-slick';

const settings = {
  autoplay: true,
  draggable: false,
  arrows: false,
  dots: true,
  infinite: true,
  speed: 700,
  slidesToShow: 1,
  slidesToScroll: 1
};

export class Opinions extends Component {

  render() {

    return (
      <Grid className="opinions" fluid={true}>
        <Row>
          <Grid fluid={false}>
          <Slider {...settings}>
           <Col lg={12}>
             <blockquote>
               <p className="opinions-text">"You can’t have great software without a great team, and most software teams behave like dysfunctional families."</p>
                <footer>Jim McCarthy</footer>
             </blockquote>
           </Col>
           <Col lg={12}>
           <blockquote>
             <p className="opinions-text">"Learning to program has no more to do with designing interactive software than learning to touch type has to do with writing poetry"</p>
              <footer>Ted Nelson</footer>
           </blockquote>
           </Col>
           <Col lg={12}>
           <blockquote>
             <p className="opinions-text">"First learn computer science and all the theory. Next develop a programming style. Then forget all that and just hack."</p>
              <footer>George Carrette</footer>
           </blockquote>
           </Col>
           <Col lg={12}>
           <blockquote>
             <p className="opinions-text">"On two occasions I have been asked [by members of Parliament]: 'Pray, Mr. Babbage, if you put into the machine wrong figures, will the right answers come out?' I am not able rightly to apprehend the kind of confusion of ideas that could provoke such a question."</p>
              <footer>Charles Babbage</footer>
           </blockquote>
           </Col>
           <Col lg={12}>
           <blockquote>
             <p className="opinions-text">"The best programmers are not marginally better than merely good ones. They are an order-of-magnitude better, measured by whatever standard: conceptual creativity, speed, ingenuity of design, or problem-solving ability."</p>
              <footer>Randall E. Stross</footer>
           </blockquote>
           </Col>
           <Col lg={12}>
           <blockquote>
             <p className="opinions-text">"If McDonalds were run like a software company, one out of every hundred Big Macs would give you food poisoning, and the response would be, ‘We’re sorry, here’s a coupon for two more."</p>
              <footer>Mark Minasi</footer>
           </blockquote>
           </Col>
           </Slider>
          </Grid>
        </Row>
      </Grid>

)
  }
}
