import React from 'react';
import Interactive from 'react-interactive';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Navigation from './Navigation';
import Footer from './Footer';
import ExampleComponent from './ExampleComponent';
import ResumeComponent from './ResumeComponent';
import ContactComponent from './ContactComponent';
import PageNotFound from './PageNotFound';
import Breadcrumbs from './Breadcrumbs';
import s from '../styles/app.style';
import lifecycle from 'react-pure-lifecycle';
import {Grid, Row, Column} from 'react-cellblock';

export default function App() {

  return (
  	<div>
		<div style={s.root}>
		  <Navigation />

		  <nav style={s.breadcrumbs}>
		  <Breadcrumbs />
		  </nav>

		  <Switch>
		  <Route exact path="/" component={Home} />
		  <Route path="/example" component={ExampleComponent} />
		  <Route path="/resume" component={ResumeComponent} />
		  <Route path="/contact" component={ContactComponent} />
		  <Route component={PageNotFound} />
		  </Switch>
		</div>
		<div>
	  		<Footer />
	  	</div>
  	</div>
  );
}
