import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { browserHistory } from 'react-router';

/*
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

//Mongo db

// Connection URL
const url = 'mongodb://localhost:27017/myproject';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log('Connected successfully to server');

  db.close();
});

*/
export default class Home extends Component {
    constructor(props) {
    super(props);
    this.click = this.click.bind(this);
    this.state = {user: [], name: ''};
  }
  click() {
    console.log('user verified');   
    browserHistory.push('/Hell');
 }
  render() {
    const styles = require('./Home.scss');
    return (
      <div className={styles.home}>
        <Helmet title="Home"/>
        <h1>Hello World</h1>
        <input type = "text" /> 
        &nbsp;&nbsp;
        <input type = "text" /> &nbsp; &nbsp;
        <button onClick = {this.click} className = "btn btn-success">Login</button>
      </div>
    );
  }
}


