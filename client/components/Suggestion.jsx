import React, { Component } from 'react';

class Suggestion extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title } = this.props;
    return (
      <div className='suggestion'>
        <p>{ title }</p>
        <button type='button'>Add to roll!</button>
      </div>
    );
  }
}

export default Suggestion;
