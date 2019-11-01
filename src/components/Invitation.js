<<<<<<< HEAD
import React from 'react';

class Invitation extends React.Component {

  render() {
    return (
      <div>
        <h1>You've been invited!</h1>
        {this.props.children}
=======
// Code Invitation Component Here
import React from 'react';
export default class Invitation extends React.Component{
  render(){
    return (
      <div>
        <h1>{"You've been invited!"}</h1>
        <div>{this.props.children}</div>
>>>>>>> 4b7db5bdd1d13b9f8c4b0edf88e058fa9c4cab4a
      </div>
    )
  }
}
<<<<<<< HEAD
export default Invitation;
=======
>>>>>>> 4b7db5bdd1d13b9f8c4b0edf88e058fa9c4cab4a
