import React, { Component } from 'react';
import { Link } from 'react-router';
import Helmet from 'react-helmet';


export default class Home extends Component {
  render() {
    const styles = require('./Home.scss');
    return (
      <div className={styles.home}>
        <Helmet title="Home"/>
        <h1> Hello World Test Home I am working Tfeslt Again Again</h1>
        <button className = "btn btn-success">Go Home Roger</button>
        <button className = "btn btn-danger">Test ME </button>
        <Link to="/Help">Help</Link>
      </div>
    );
  }
}
