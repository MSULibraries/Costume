import React, { Component, PropTypes } from 'react';
import Text from './product_text.jsx';
export default class Picture extends Component {
	render(){
	  var indents = [];
	  if(this.props.sidebar){
      for (var i = 0; i < this.props.amount; i++) {
        indents.push(<div><div id = {i}><img style = {{margin: '10%'}}  src={this.props.src[i]} /></div><br/></div>);
       }
	  }
	  else{
		  for (var i = 0; i < this.props.amount; i++) {
        indents.push(<div id = {i} className = "col-md-3"><img style = {{margin: '1%'}}  src={this.props.src[i]} /><p>{this.props.name[i]}</p></div>);
       }
	  }
    return ( 
	<div onClick={this.props.onClick}>
	{indents} 
	</div>
	);
  }
}