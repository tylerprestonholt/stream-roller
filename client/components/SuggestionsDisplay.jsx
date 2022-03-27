import React, { Component } from 'react';
import Suggestion from './Suggestion.jsx';

class SuggestionsDisplay extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { suggestions } = this.props;
    console.log('display prop', suggestions);
    const suggestionsList = [];
    suggestions.forEach((suggestion, index) => {
      suggestionsList.push(<Suggestion title={ suggestion } key={ `suggestion${index}` } />);
    });

    return (
      <div className='suggestions-list'>
        { suggestionsList }
      </div>
    );
  }
}

export default SuggestionsDisplay;
