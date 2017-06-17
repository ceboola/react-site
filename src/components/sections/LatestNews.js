import React, { Component } from 'react';
import { Grid, Col, Row, Well } from 'react-bootstrap';
import { Reddit } from './Reddit';

const randomTitleNumber = (min,max) => {
  return Math.floor(Math.random()*(max-min+1)+min);
}

const randomSubreddit = () => {
  let subreddits = ['reactjs', 'javascript', 'frontend', 'reactnative'];
  let r = subreddits[Math.floor(Math.random() * subreddits.length)];
  return r;
}

export class LatestNews extends Component {

  render() {

    return (
<section id="blog">
      <Grid className="latest-news" fluid={true}>
        <Row>
          <Grid fluid={false}>

          <h2 className="h3">From the blog</h2>

          <Col className="reddit-container-preview" xs={12} md={12} lg={12}>
            <Well className="reddit-card">
              <Reddit subreddit={randomSubreddit()}
               title={randomTitleNumber(0,24)}
               dataContainer="date"
               redditContainer="reddit-content-preview"
               imageContainer="reddit-image-container-preview"
               image="reddit-image-preview"
               heading="reddit-heading-preview"
               author="reddit-author-preview">
             </Reddit>
            </Well>
          </Col>

          <Col className="reddit-container" xs={12} sm={6} md={4} lg={4}>
            <Well className="reddit-card">
              <Reddit subreddit={randomSubreddit()}
                title={randomTitleNumber(0,24)}
                dataContainer="date"
                redditContainer="reddit-content"
                imageContainer="reddit-image-container"
                image="reddit-image"
                heading="reddit-heading"
                author="reddit-author">
              </Reddit>
            </Well>
          </Col>

          <Col className="reddit-container" xs={12} sm={6} md={4} lg={4}>
            <Well className="reddit-card">
              <Reddit subreddit={randomSubreddit()}
                title={randomTitleNumber(0,24)}
                dataContainer="date"
                redditContainer="reddit-content"
                imageContainer="reddit-image-container"
                image="reddit-image"
                heading="reddit-heading"
                author="reddit-author">
              </Reddit>
            </Well>
          </Col>

          <Col className="reddit-container" xs={12} sm={6} smOffset={3} md={4} mdOffset={0} lg={4}>
            <Well className="reddit-card">
              <Reddit subreddit={randomSubreddit()}
                title={randomTitleNumber(0,24)}
                dataContainer="date"
                redditContainer="reddit-content"
                imageContainer="reddit-image-container"
                image="reddit-image"
                heading="reddit-heading"
                author="reddit-author">
              </Reddit>
            </Well>
          </Col>
          </Grid>
        </Row>
      </Grid>
</section>
)
  }
}
