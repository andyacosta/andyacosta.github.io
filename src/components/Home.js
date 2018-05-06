import React, { Component } from 'react';
import Interactive from 'react-interactive';
import { Link } from 'react-router-dom';
import { Code } from '../styles/style';
import s from '../styles/home.style';
import Intro from './Intro.js';
import Typist from 'react-typist';
import lifecycle from 'react-pure-lifecycle';

class Home extends React.Component{
  
  constructor(props) {
    super(props);

    this.state = {
        showComponent: false,
    };
  }

  componentDidMount(){
    console.log('I mounted!');
    const ele = document.getElementById('loader')
    const ele2 = document.getElementById('root')
    if(ele){
      setTimeout(() => {
        // remove from DOM
        ele.outerHTML = ''
        ele2.className = 'shown'
        this.setState({
            showComponent: true,
        });
      }, 9250)//9250
    }
  }

  render(){
    return (
      <div>
        <div>
          {this.state.showComponent && <Intro />}
        </div>
      </div>
    );
  }
}

export default Home;

/*const repoReadmeLink = text => (
    <Interactive
      as="a"
      {...s.link}
      href="https://github.com/andyacosta/andyacosta.github.io.git#readme"
    >{text}</Interactive>
);

const componentDidMount = () => {
  console.log('I mounted!');
  const ele = document.getElementById('loader')
  const ele2 = document.getElementById('root')
  if(ele){
    setTimeout(() => {
      // remove from DOM
      ele.outerHTML = ''
      ele2.className = ''
    }, 9000)
  }
};

const methods = {
  componentDidMount
};


const Home = () => {
  return (
    <div>
      <div>
        <Typist cursor={{show:false}} avgTypingDelay={100} delay={90000}>
          <span style={s.text1}>Hello!</span>
        </Typist>
      </div>
      <p style={s.p}>
        This is an example single page app built
        with React and React&nbsp;Router using {' '}
        <Code>BrowserRouter</Code>. Navigate with the links below and
        refresh the page or copy/paste the url to test out the redirect
        functionality deployed to overcome GitHub&nbsp;Pages incompatibility
        with single page apps (like this one).
      </p>
      <p style={s.p}>
        Please see the {repoReadmeLink('repo readme')} for instructions on how to
        use this boilerplate to deploy your own single page app using GitHub Pages.
      </p>
      <div style={s.pageLinkContainer}>
        <Interactive
          as={Link}
          {...s.link}
          to="/example"
        >Example page</Interactive>
      </div>
      <div style={s.pageLinkContainer}>
        <Interactive
          as={Link}
          {...s.link}
          to="/example/two-deep?field1=foo&field2=bar#boom!"
        >Example two deep with query and hash</Interactive>
      </div>
      <div style={s.pageLinkContainer}>
        <Interactive
          as={Link}
          {...s.link}
          to="/resume"
        >Resume</Interactive>
      </div>
    </div>
  );
}

export default lifecycle(methods)(Home);*/



/*export default function Home() {
  const repoReadmeLink = text => (
    <Interactive
      as="a"
      {...s.link}
      href="https://github.com/andyacosta/andyacosta.github.io.git#readme"
    >{text}</Interactive>
  );

  return (
    <div>
      <div>
        <Typist cursor={{show:false}} avgTypingDelay={100} delay={900}>
          <span style={s.text1}>Hello! I'm </span><span style={s.text2}>Andrea
            <Typist.Backspace count={3} delay={1200}/>
            y Acosta.</span>
        </Typist>
      </div>
      <p style={s.p}>
        This is an example single page app built
        with React and React&nbsp;Router using {' '}
        <Code>BrowserRouter</Code>. Navigate with the links below and
        refresh the page or copy/paste the url to test out the redirect
        functionality deployed to overcome GitHub&nbsp;Pages incompatibility
        with single page apps (like this one).
      </p>
      <p style={s.p}>
        Please see the {repoReadmeLink('repo readme')} for instructions on how to
        use this boilerplate to deploy your own single page app using GitHub Pages.
      </p>
      <div style={s.pageLinkContainer}>
        <Interactive
          as={Link}
          {...s.link}
          to="/example"
        >Example page</Interactive>
      </div>
      <div style={s.pageLinkContainer}>
        <Interactive
          as={Link}
          {...s.link}
          to="/example/two-deep?field1=foo&field2=bar#boom!"
        >Example two deep with query and hash</Interactive>
      </div>
      <div style={s.pageLinkContainer}>
        <Interactive
          as={Link}
          {...s.link}
          to="/resume"
        >Resume</Interactive>
      </div>
    </div>
  );
}*/
