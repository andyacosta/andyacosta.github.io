import React, { Component } from 'react';
import Interactive from 'react-interactive';
import { Link } from 'react-router-dom';
import { Code } from '../styles/style';
import s from '../styles/intro.style';
import Typist from 'react-typist';

class Intro extends React.Component{
	constructor() {
    super();
  }

  render() {
    return (
    	<div>
	    	<Typist cursor={{show:false}} avgTypingDelay={100} startDelay={200}>
		    	<span style={s.intro}>Hello! I'm Andrea
			    	<Typist.Backspace count={3} delay={200} />
			    	y Acosta. I am a recent graduate in Washington, DC.
		    	</span>
	    	</Typist>
    	</div>
    )
  }

}

export default Intro; 