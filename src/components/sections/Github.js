import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';


const urlForUsername = username =>
    `https://api.github.com/users/${username}`

export class Github extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    fetch(urlForUsername(this.props.username))
    .then(data => data.json())
    .then(data => {
      this.setState({
        githubData: data
      })
    })
  }

  render() {
    if (!this.state.githubData) return <h2>Loading...</h2>
    const splitApiText = this.state.githubData.name
    const splitted = splitApiText.split(' ')

    return (
<div>
  <figure className={this.props.className}>
	<figcaption>
		<h3 className='bios'>{splitted[0]} <strong>{splitted[1]}</strong></h3>
		<p className="">{this.state.githubData.bio}</p>
		<div className="icons">
		</div>
	</figcaption>
	<img src={this.state.githubData.avatar_url} alt=""/>
	<div className="position">
    <div><p className="position-icons-left"><FontAwesome name="user-o" /> {this.state.githubData.login} </p>
     <p className="position-icons"><FontAwesome name="heart-o" /> {this.state.githubData.followers} </p>
      <p className="position-icons"><FontAwesome name="github" /> {this.state.githubData.public_repos} </p>
    </div>
       Working at: {this.state.githubData.company}
       <p className="position-icons-left"> <FontAwesome name="map-marker" /> {this.state.githubData.location} </p>
  </div>
</figure>
</div>


)
  }
}

Github.propTypes={
    username: React.PropTypes.string.isRequired,
    className: React.PropTypes.string.isRequired
};
