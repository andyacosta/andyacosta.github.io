import React, { Component } from 'react';

const API = 'https://api.github.com/users/andyacosta/repos';

class Repos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hits: [],
    };
  }

  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(data => this.setState({ hits: data }));
  }

  render() {
    const { hits } = this.state;

    return (
      <div>
        {hits.map(hit =>
          <div>
            {hit.full_name}
          </div>
        )}
      </div>
    );
  }
}

export default Repos;