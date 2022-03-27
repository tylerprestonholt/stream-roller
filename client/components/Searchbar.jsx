import React, { Component } from 'react';
import SuggestionsDisplay from './SuggestionsDisplay.jsx';

class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      suggestions: []
    }
    this.getSuggestions = this.getSuggestions.bind(this);
  }

  getSuggestions(event) {
    event.preventDefault();
    // const searchTitle = event.target.searchTitle.value;
    // const apiTitle = searchTitle.split(' ').join('-').toLowerCase();
    // const apiURL = `https://api.trakt.tv/shows/${apiTitle}/related`;
    // console.log('orig', searchTitle);
    // console.log('api', apiTitle);
    // console.log('url', apiURL);
    this.setState({ suggestions: ['Battlestar Galactica', 'Sons of Anarchy', 'Hannibal', 'The Walking Dead', 'True Blood'] }, () =>{
      console.log('new state', this.state);
    });
    return console.log(event.target.searchTitle.value);
  }

  render() {
    const { suggestions } = this.state;
    console.log(suggestions);
    if (suggestions.length === 0) {
      return (
        <div className='search-container'>
          <form className='search-form' onSubmit={this.getSuggestions}>
            <input type='text' id='searchbar' name='searchTitle' placeholder='Enter a favorite show title to see suggestions...' autoComplete='off'/>
            <input type='submit' id='search-button' value='Get rolling!'/>
          </form>
        </div>
      );
    }

    return (
      <>
        <div className='search-container'>
          <form className='search-form' onSubmit={this.getSuggestions}>
            <input type='text' id='searchbar' name='searchTitle' placeholder='Enter a favorite show title to see suggestions...' autoComplete='off'/>
            <input type='submit' id='search-button' value='Get rolling!'/>
          </form>
        </div>
        <div className='suggestions-container'>
          <SuggestionsDisplay suggestions={ suggestions }/>
        </div>
      </>
    );
  }
}

export default Searchbar;
