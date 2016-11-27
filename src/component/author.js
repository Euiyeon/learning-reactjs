import React, { Component } from 'react';

export class Author extends Component {
  constructor(props) {
    super(props);
    
    // let {firstName, lastName} = this.props;
    // console.log(firstName, lastName);
    this.state = this.props;
    // console.log(this.state);
  }
  
  render() {
    let state = this.state;
    // console.log(props);
    return (
      <div className='Author '>
        -- {state.firstName} {state.lastName}
      </div>
    );
  }
}
