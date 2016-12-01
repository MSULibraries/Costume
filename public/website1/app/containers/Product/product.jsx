import React, { Component, PropTypes } from 'react';
import Picture from '../../components/picture.jsx';
export default class Products extends Component {
	render(){
		var MyArray = ['justin','tiffany','joe','john','karissa','pam','joseph','sean','kim'];
		var SideArray = ['http://placehold.it/92x138', 'http://placehold.it/92x138', 'http://placehold.it/92x138', 'http://placehold.it/92x138' ];
		var imageSrc = ['http://placehold.it/580x870'];
  return (
    <div>
	 <div className = "col-md-2" style = {{maxWidth: '30%', background: 'red'}}>
	  <Picture sidebar = {true}  src = {SideArray} name = {MyArray} amount = {4} />
	</div>
      <Picture className = "col-md-6" src = {imageSrc} name = {MyArray} amount = {1} />
    </div>
  );
 }
}