import React, { Component } from 'react';
import Interactive from 'react-interactive';
import { Switch, Route, Link } from 'react-router-dom';
import ExampleTwoDeepComponent from './ExampleTwoDeepComponent';
import Repos from './Repos';
import PageNotFound from './PageNotFound';
import s from '../styles/resumerepos.style';
import lifecycle from 'react-pure-lifecycle';
import GitHub from 'github-api';
import ReactFitText from 'react-fittext';

const componentWillMount = () => {
  console.log('I mounted!');
  const ele = document.getElementById('loader')
  const ele2 = document.getElementById('root')
  if(ele){
      ele.outerHTML = ''
      ele2.className = ''
  }
};

const methods = {
  componentWillMount
};

const ResumePageText = () => (
  <p style={s.p}>
    <span style={s.resumeText}>Below is a list of my <a href="http://github.com/andyacosta">github repos</a> and projects that I have worked on.</span>


  </p>
);

const ResumeComponent = () => {
  return (
    <Switch>
      <Route
        exact path="/resume"
        render={() => (
          <div>
            <ReactFitText compressor={3}>
              <ResumePageText />
            </ReactFitText>
            <Repos />
          })
          </div>
        )}
      />
      <Route component={PageNotFound} />
    </Switch>
  );
};

export default lifecycle(methods)(ResumeComponent);