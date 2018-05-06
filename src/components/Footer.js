import React from 'react';
import Interactive from 'react-interactive';
import { Switch, Route } from 'react-router-dom';
import s from '../styles/footer.style';
import lifecycle from 'react-pure-lifecycle';
import {Grid, Row, Column} from 'react-cellblock';

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
							<i className="fab fa-github fa-lg"></i>
						</Column>
						<Column width="1/3">
							<i className="fab fa-linkedin fa-lg"></i>
						</Column>
						<Column width="1/3">
							<i className="fab fa-codepen fa-lg"></i>
						</Column>
					</Row>
				</Grid>
			</div>
		</div>
	)
}