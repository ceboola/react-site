/* global $ */

import React, { Component } from 'react';
import { Grid, Col, Row, Well } from 'react-bootstrap';
import { FormErrors } from './FormErrors';


export class Contact extends Component {

  constructor (props) {
  super(props);
  this.state = {
    name: '',
    email: '',
    message: '',
    formErrors: {name: '', email: '', message: ''},
    nameValid: false,
    emailValid: false,
    messageValid: false,
    formValid: false
  }
}

handleUserInput = (e) => {
  const name = e.target.name;
  const value = e.target.value;
  this.setState({[name]: value},
                () => { this.validateField(name, value) });
}

validateField(fieldName, value) {
  let fieldValidationErrors = this.state.formErrors;
  let nameValid = this.state.nameValid;
  let emailValid = this.state.emailValid;
  let messageValid = this.state.messageValid;

  switch(fieldName) {
    case 'name':
      nameValid = value.length >= 6;
      fieldValidationErrors.name = nameValid ? ' is valid ✓': ' is too short, at least 6 chars';
      break;

    case 'email':
      emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
      fieldValidationErrors.email = emailValid ? ' is valid ✓' : ' is invalid';
      break;

      case 'message':
        messageValid = value.length >= 20;
        fieldValidationErrors.message = messageValid ? ' is valid ✓': ' is too short, at least 20 chars';
        break;

      default:
        break;
  }
  this.setState({formErrors: fieldValidationErrors,
                  nameValid: nameValid,
                  emailValid: emailValid,
                  messageValid: messageValid,
                }, this.validateForm);
}

validateForm() {
  this.setState({formValid: this.state.emailValid && this.state.nameValid && this.state.messageValid});
}

errorClass(error) {
  return(error.length === 0 ? '' : 'has-error');
}

  render() {

    return (
      <Grid className="contact" fluid={true}>
          <Grid fluid={false}>
            <Well>
              <h2 className="contact-heading">Want to know more? Feel free to ask.</h2>
            <Row>
          <Col xs={12} sm={6} md={6} lg={6}>
            <div className="contact-error">
              <FormErrors formErrors={this.state.formErrors} />
            </div>
              <form id="ajax-contact" className="form" method="post" action="mailer.php">
                <label className="sr-only" htmlFor="name">Name:</label>
                <p className="contact-paragraph" type="Name:">
                <input id="name" name="name" placeholder="Name" required value={this.state.name} onChange={this.handleUserInput}></input></p>

                <label className="sr-only" htmlFor="email">E-mail:</label>
                <p className="contact-paragraph" type="Email:"><input id="email" name="email" placeholder="E-mail" required value={this.state.email} onChange={this.handleUserInput}></input></p>

                <label className="sr-only" htmlFor="message">Message:</label>
                <p className="contact-paragraph" type="Message:"><textarea id="message" name="message" className="contact-textarea" placeholder="Type youre message here" required value={this.state.message} onChange={this.handleUserInput}></textarea></p>
                <button className="contact-button" type="submit" disabled={!this.state.formValid}>Send Message</button>
              </form>
                <div id="form-messages"></div>
          </Col>

            <Col xs={12} sm={6} md={6} lg={6}>
              <h3 className="contact-direct-text">Talk with us personally</h3>
              <div className="contact-direct"><strong>Project Manager</strong>
                <span className="contact-direct-text">John Doe</span>
                <span className="contact-direct-text">johndoe@gmail.com</span>
                <span className="contact-direct-text">(512) 808-0417</span>

              </div>
              <div className="contact-direct"><strong>Graphic Designer</strong>
                <span className="contact-direct-text">Marianna Telmack</span>
                <span className="contact-direct-text">maritel@gmail.com</span>
              </div>
              <div className="contact-direct"><strong>General Chat</strong>
                <span className="contact-direct-text">hello@gmail.com</span>
              </div>
            </Col>
            </Row>
          </Well>
          </Grid>
      </Grid>

)
  }
}

$(function() {

  // Get the form.
  var form = $('#ajax-contact');

  // Get the messages div.
  var formMessages = $('#form-messages');

  // Set up an event listener for the contact form.
  $(form).submit(function(e) {
    // Stop the browser from submitting the form.
    e.preventDefault();

    // Serialize the form data.
    var formData = $(form).serialize();

    // Submit the form using AJAX.
    $.ajax({
      type: 'POST',
      url: $(form).attr('action'),
      data: formData,
      success: (function(response) {
        // Make sure that the formMessages div has the 'success' class.
        $(formMessages).removeClass('error');
        $(formMessages).addClass('success');

        // Set the message text.
        $(formMessages).text(response);

        // Clear the form.
        $('#name').val('');
        $('#email').val('');
        $('#message').val('');
      }),
      error: (function(data) {
        // Make sure that the formMessages div has the 'error' class.
        $(formMessages).removeClass('success');
        $(formMessages).addClass('error');

        // Set the message text.
        if (data.responseText !== '') {
          $(formMessages).text(data.responseText);
        } else {
          document.querySelectorAll('#form-messages').innerHTML = 'Oops! An error occured and your message could not be sent.'
        }
      })
    });

  });

});
