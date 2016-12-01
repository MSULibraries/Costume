import React, { Component, PropTypes } from 'react';
import Picture from '../../components/picture.jsx';
import { browserHistory } from 'react-router';
export default class Products extends Component {
	render(){
		var MyArray = ['justin','tiffany','joe','john','karissa','pam','joseph','sean','kim'];
		var imageSrc = ['http://placehold.it/249x373','http://placehold.it/249x373','http://placehold.it/249x373','http://placehold.it/249x373','http://placehold.it/249x373',
		                'http://placehold.it/249x373', 'http://placehold.it/249x373', 'http://placehold.it/249x373'];
  return (
    <div>
      <Picture src = {imageSrc} onClick = { () => {browserHistory.push('/Product'); }} name = {MyArray} amount = {8} />
    </div>
  );
 }
}