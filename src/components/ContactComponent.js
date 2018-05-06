import React, { Component } from 'react';
import Interactive from 'react-interactive';
import { Switch, Route, Link } from 'react-router-dom';
import ExampleTwoDeepComponent from './ExampleTwoDeepComponent';
import PageNotFound from './PageNotFound';
import s from '../styles/contact.style';
import lifecycle from 'react-pure-lifecycle';

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

const ContactForm = () => (
  <form method="POST">
    <label htmlFor="name">Name</label>
    <input type="text" name="name" />

    <label htmlFor="email">Email</label>
    <input type="email" name="email" />

    <label htmlFor="message">Message</label>
    <textarea name="message" rows="3"></textarea>

    <input type="submit" />
  </form>

);

const ContactPageText = () => (
  <p style={s.p}>
    This is a contact page. Refresh the page or copy/paste the url to
    test out the redirect functionality (this same page should load
      after the redirect).
  </p>
);

const ContactComponent = () => {
  return (
    <Switch>
      <Route
        exact path="/contact"
        render={() => (
          <div>
            <ContactPageText />
            <ContactForm />
            <div style={s.pageLinkContainer}>
            	stuff2~
            </div>
          </div>
        )}
      />
      <Route component={PageNotFound} />
    </Switch>
  );
};

export default lifecycle(methods)(ContactComponent);

