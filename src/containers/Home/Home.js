import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { browserHistory } from 'react-router';

const firebase = require('firebase');
const app = firebase.initializeApp({
    apiKey: 'AIzaSyBI2JTzPCoW4XsxLmA-TmZA0YRjLDW_96s',
    authDomain: 'costume-6b34a.firebaseapp.com',
    databaseURL: 'https://costume-6b34a.firebaseio.com',
    storageBucket: 'costume-6b34a.appspot.com',
    messagingSenderId: '127827338671'
});


export default class Home extends Component {
    constructor(props) {
    super(props);
    this.click = this.click.bind(this);
    this.credits = this.credits.bind(this);
    this.state = {userName: '', password: ''};
  }
  click() {
    console.log('user verified');  
    console.log(this.state.userName); 
    console.log(this.state.password); 
    // browserHistory.push('/Hell');
    /*
    const email = 'bob@gmail.com';
    const password = 'Xtrea1';
    firebase.auth().createUserWithEmailAndPassword(email, password).catch( function(error) {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;  
    console.log(errorCode); 
    });
    */
 }
 credits(event, val) {
   switch (val) {
   case 1:
   this.setState({ userName: event.target.value });
   break;
   
   case 2:
   this.setState({ password: event.target.value });
   break;
   
   default:
   break; 
   }
 }
 
  render() {
    const styles = require('./Home.scss');
    return (
      <div className={styles.home}>
        <Helmet title="Home"/>
        <h1>Hello World</h1>
        &nbsp; &nbsp; <label>User Name: <input value = {this.state.userName} onChange = { (event) => this.credits(event, 1)} type = "text" /></label><br />
        &nbsp; &nbsp; <label>Password <input value = {this.state.password} onChange = { (event) => this.credits(event, 2)} type = "text" /></label><br />
        &nbsp; &nbsp; <button onClick = {this.click} className = "btn btn-success">Login</button>
      </div>
    );
  }
}


