import React from 'react';
import Interactive from 'react-interactive';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import ExampleComponent from './ExampleComponent';
import ResumeComponent from './ResumeComponent';
import ContactComponent from './ContactComponent';
import PageNotFound from './PageNotFound';
import Breadcrumbs from './Breadcrumbs';
import s from '../styles/navigation.style';
import lifecycle from 'react-pure-lifecycle';
import {Grid, Row, Column} from 'react-cellblock';

class Navigation extends React.Component{
	constructor() {
		super();
	}

	render() {
		return (
			<div style={s.navBar}>
				<Grid>
					<Row >
						<Column width="1/4">
							<div style={s.navInnerBar}>
								<Interactive 
									as="a" 
									href="/" 
									style={s.navTitle}
									{...s.navLink}
								>
								Home
								</Interactive>
							</div>
						</Column>
						<Column width="1/4">
							<div style={s.navInnerBar}>
								<Interactive
									as="a"
									href="/example"
									style={s.navTitle}
									{...s.navLink}
								>
								About
								</Interactive>
							</div>
						</Column>
						<Column width="1/4">
							<div style={s.navInnerBar}>
								<Interactive
									as="a"
									href="/resume"
									style={s.navTitle}
									{...s.navLink}
									>
								Portfolio
								</Interactive>
							</div>
						</Column>
						<Column width="1/4">
							<div style={s.navInnerBar}>
								<Interactive
									as="a"
									href="/contact"
									style={s.navTitle}
									{...s.navLink}
									>
								Contact
								</Interactive>
							</div>
						</Column>
					</Row>
				</Grid>
			</div>

		)
	}
}

export default Navigation; 