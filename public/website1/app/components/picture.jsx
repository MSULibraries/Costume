import React, { Component, PropTypes } from 'react';
export default class App extends Component {
	render(){
	  var indents = [];
      for (var i = 0; i < this.props.amount; i++) {
        indents.push(<div><img className = "col-md-3" src="http://placehold.it/350x150" /><br/><h1>Product</h1></div>);
      }
    return(
      <div>
	   {indents}
      </div>
    );
  }
}