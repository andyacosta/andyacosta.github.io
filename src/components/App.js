import React from 'react';
import Interactive from 'react-interactive';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import ExampleComponent from './ExampleComponent';
import ResumeComponent from './Resume'
import PageNotFound from './PageNotFound';
import Breadcrumbs from './Breadcrumbs';
import s from '../styles/app.style';
import lifecycle from 'react-pure-lifecycle';


export default function App() {
  const repoLink = text => (
    <Interactive
      as="a"
      {...s.link}
      href="https://github.com/andyacosta/andyacosta.github.io.git#readme"
    >{text}</Interactive>
  );

  return (
    <div style={s.root}>
      <h1 style={s.title}>Andy Acosta</h1>
      <Interactive
      as="a"
      href="https://andyacosta.github.io"
      style={s.repoLink}
      {...s.link}
      >https://andyacosta.github.io</Interactive>

      <nav style={s.breadcrumbs}>
      <Breadcrumbs />
      </nav>

      <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/example" component={ExampleComponent} />
      <Route path="/resume" component={ResumeComponent} />
      <Route component={PageNotFound} />
      </Switch>

      <div style={s.creditDiv}>
        <Interactive
        as="a"
        href="https://andyacosta.github.io"
        style={s.repoLink}
        {...s.link}
        >
        <span style={s.creditLine}>{repoLink('MADE WITH ')}</span><i className="fab fa-react"></i>
        </Interactive>
      </div>
    </div>
  );
}
