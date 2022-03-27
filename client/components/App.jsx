import React, { Component } from 'react';
import Header from './Header.jsx';
import Searchbar from './Searchbar.jsx';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Header />
        <Searchbar />
      </>
    );
  }
}

export default App;
