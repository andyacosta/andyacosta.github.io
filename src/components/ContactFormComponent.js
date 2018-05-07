import React, { Component } from 'react';
import {Grid, Row, Column} from 'react-cellblock';
import s from '../styles/contact.style';


class ContactFormComponent extends React.Component {
  constructor() {
    super();
    //this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    var query = 'From: Andy Acosta <andyacosta5@gmail.com>\n';
    query += 'To: Andy Acosta <andyacosta5@gmail.com>\n';
    query += 'Subject: Contact Form from ' + email + '\n\n';
    query += message;

    console.log('Query: ' + query);

    var encoded = Buffer.from(query).toString('base64');
    encoded = encoded.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');

    console.log('Encoded: ' + encoded);

    fetch('https://www.googleapis.com/gmail/v1/users/andyacosta5%40gmail.com/messages/send?key=AIzaSyCpo8Idt2zTGjLevCSIznH1vM4p3ty7f5c', {
      method: 'post',
      raw: encoded
    }).then(function(response) {
      return response.json();
    }).then(function(data) {
      console.log('email! ', data);
    }).catch(error => console.error(error));
    
    /*fetch('/api/form-submit-url', {
      method: 'POST',
      body: data,
    });*/
    console.log('handling submit!');
  }

  render() {
    return (
      <div style={s.form}>
        <form onSubmit={this.handleSubmit}>
          <Grid>
            <Row>
              <Column width="1/2">
                <div>
                  <label htmlFor="name" style={s.input}>Name</label>
                </div>
                <div>
                  <input id="name" name="name" type="text" style={s.inputText}/>
                </div>
              </Column>
              <Column width="1/2">
                <div>
                  <label htmlFor="email" style={s.input}>Email</label>
                </div>
                <div>
                  <input id="email" name="email" type="email" style={s.inputText} />
                </div>
              </Column>
            </Row>
            <Row>
              <Column width="1/1">
                <div>
                  <label htmlFor="message" style={s.input}>Message</label>
                </div>
                <div>
                  <textarea id="message" rows="5" name="message" style={s.textArea}/>
                </div>
              </Column>
            </Row>
            <Row>
              <Column width="1/1">
                <button style={s.submitButton}>Send email</button>
              </Column>
            </Row>
          </Grid>
        </form>
      </div>
    );
  }
}

export default ContactFormComponent; 