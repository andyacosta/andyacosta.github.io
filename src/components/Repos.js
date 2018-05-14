import React, { Component } from 'react';
import Interactive from 'react-interactive';
import s from '../styles/resumerepos.style';

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
        {hits.map( (hit, index) =>
          <span style={s.repoText}>
            <Interactive 
                  as="a" 
                  href="/"
                  {...s.repoLink}
                >
              <a href={'http://github.com/' + hit.full_name}>{hit.name}</a>
            </Interactive>
            &nbsp;/&nbsp;
          </span>
        )}
      </div>
    );
  }
}

export default Repos;