import React, { Component } from 'react';
import Interactive from 'react-interactive';
import { Switch, Route, Link } from 'react-router-dom';
import ExampleTwoDeepComponent from './ExampleTwoDeepComponent';
import PageNotFound from './PageNotFound';
import s from '../styles/contact.style';
import lifecycle from 'react-pure-lifecycle';
import ContactFormComponent from './ContactFormComponent';

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
  <form id="contact-form"  method="POST">
      <div className="form-group">
          <label for="name">Name</label>
          <input type="text" className="form-control" id="name" />
      </div>
      <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
      </div>
      <div className="form-group">
          <label for="message">Message</label>
          <textarea className="form-control" rows="5" id="message"></textarea>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
  </form>

);

const ContactPageText = () => (
  <p style={s.p}>
    <center>Under construction!</center>
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
            
            <div style={s.pageLinkContainer}>
            	
            </div>
          </div>
        )}
      />
      <Route component={PageNotFound} />
    </Switch>
  );
};

export default lifecycle(methods)(ContactComponent);

