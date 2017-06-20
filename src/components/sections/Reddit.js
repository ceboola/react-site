import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import user from './images/user.svg';
import logo from './images/logo.svg';

const urlForSubreddit = username =>
    `https://www.reddit.com/r/${username}.json`


export class Reddit extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    fetch(urlForSubreddit(this.props.subreddit))
    .then(data => data.json())
    .then(data => {
      this.setState({
        redditData: data
      })
    })
  }

  titleMaxLength = () => {
  const headingTitle = this.state.redditData.data.children[this.props.title].data.title;
   if(headingTitle.length>=70) {
      return `${headingTitle.substr(0, 70)} ...`;
   } else {
     return headingTitle;
    }
   }

   domainMaxLength = () => {
   const domainTitle = this.state.redditData.data.children[this.props.title].data.domain;
    if(domainTitle.length>=18) {
      return `${domainTitle.substr(0, 18)} ...`
    } else {
      return domainTitle;
     }
    }

    upvotesCheck = () => {
      const upvotes = this.state.redditData.data.children[this.props.title].data.score;
        if(upvotes>0) {
          return `+${upvotes}`
        } else {
          return upvotes;
        }
    }

      unixConverter = (UNIX_timestamp) => {
      const convertDate = new Date(UNIX_timestamp * 1000);
      const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
      const year = convertDate.getFullYear();
      const month = months[convertDate.getMonth()];
      const date = convertDate.getDate();
      //let hour = convertDate.getHours();
      //let min = convertDate.getMinutes();
      //let sec = convertDate.getSeconds();
      return [year, month, date]
    }


  render() {
    if (!this.state.redditData) return <h2>Loading...</h2>

    const imageUrl = extract(this.state, `redditData.data.children.${this.props.title}.data.preview.images.0.source.url`, logo)

    return (
      <div>
        <a href={this.state.redditData.data.children[this.props.title].data.url} target="_blank" rel="noopener noreferrer">

<div className={this.props.imageContainer}>
       {imageUrl && <Image className={this.props.image} src={imageUrl} alt="" responsive />}
       <div className={this.props.author}>{this.domainMaxLength()}</div>
</div>

<span className={this.props.dataContainer}
      data-month={this.unixConverter(this.state.redditData.data.children[this.props.title].data.created)[1]}
      data-year={this.unixConverter(this.state.redditData.data.children[this.props.title].data.created)[0]}>
                {this.unixConverter(this.state.redditData.data.children[this.props.title].data.created)[2]}
</span>

<div className='comment-container'>
    <div className='comment-icon'>{this.state.redditData.data.children[this.props.title].data.num_comments}</div>
    <span className='comment-label'>Comments</span>
</div>

<div className='score-container'>
    <div className='comment-icon'>{this.upvotesCheck()}</div>
    <span className='comment-label'>Upvotes</span>
</div>

<div className={this.props.redditContainer}>
<span className="hashtag-reddit"><FontAwesome name="hashtag" />{this.state.redditData.data.children[this.props.title].data.subreddit_name_prefixed}</span>
<h3 className={this.props.heading}>{this.titleMaxLength()}</h3>
<span className="author-name"><img className="author-name-image" src={user} alt="" />by {this.state.redditData.data.children[this.props.title].data.author}</span>
</div>
</a>
</div>

)
  }
}

function extract(obj, keys, alternative){

    // for empty or undefined paths, just assume root
    if (!keys) {
        return 'obj;'
    }

    var parts = typeof keys === "string" ? keys.split(".") : keys;
    var o = obj;

    for (var i=0; i < parts.length; i++) {
        var part = parts[i];

        if (typeof o !== "object") {
            // this is the last key, so we've found the value
            return alternative;
        }

        o = o[part];
    }

    if (typeof o === "undefined") {
        return alternative;
    }

    return o;
}

/*const dayConverter = (UNIX_timestamp) => {
  let convertDate = new Date(UNIX_timestamp * 1000);
  let date = convertDate.getDate();
  let convertedDay = `${date}`
  return convertedDay;
}

const yearConverter = (UNIX_timestamp) => {
  let convertDate = new Date(UNIX_timestamp * 1000);
  let year = convertDate.getFullYear();
  let convertedYear = `${year}`
  return convertedYear;
}
*/



Reddit.propTypes={
    subreddit: React.PropTypes.string.isRequired,
    title: React.PropTypes.number.isRequired
};
