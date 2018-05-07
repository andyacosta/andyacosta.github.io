import React from 'react';
import Interactive from 'react-interactive';
import { Switch, Route } from 'react-router-dom';
import s from '../styles/footer.style';
import lifecycle from 'react-pure-lifecycle';
import {Grid, Row, Column} from 'react-cellblock';
import Mailto from 'react-mailto.js';

export default function Footer(){
	const repoLink = text => (
		<Interactive
			as="a"
			{...s.link}
			href="https://github.com/andyacosta/andyacosta.github.io.git#readme"
		>
		{text}
		</Interactive>
	);


	return (
		<div style={s.footer}>
			<div>
				<Interactive
					as="a"
					href="https://andyacosta.github.io"
					style={s.repoLink}
					{...s.link}
				>
				<span style={s.creditLine}>{repoLink('MADE WITH ')}</span><i className="fab fa-react"></i>
				</Interactive>
			</div>
			<div style={s.footerIcons}>
				<Grid>
					<Row>
						<Column width="1/3">
							<Interactive
								as="a"
								href="https://github.com/andyacosta"
								>
								<i className="fab fa-github fa-lg"></i>
							</Interactive>
						</Column>
						<Column width="1/3">
							<Interactive
								as="a"
								href="https://linkedin.com/in/andreasacosta"
								>
								<i className="fab fa-linkedin fa-lg"></i>
							</Interactive>
						</Column>
						<Column width="1/3">
							<Mailto 
								secure={true}
							    to='andyacosta5@gmail.com'
							    subject="Contact Andy!"
							    body={[
							        "Hi there!",
							        "I'm ..."
							    ].join('\n')}
							>
								<i className="fas fa-envelope fa-lg"></i>
							</Mailto>
						</Column>
					</Row>
				</Grid>
			</div>
		</div>
	)
}