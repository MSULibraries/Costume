import React, { Component } from 'react';
import Helmet from 'react-helmet';

export default class Home extends Component {
    constructor(props) {
    super(props);
    this.click = this.click.bind(this);
    this.state = {user: [], name: ''};
  }
  click() {
    console.log('user verified');  
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

