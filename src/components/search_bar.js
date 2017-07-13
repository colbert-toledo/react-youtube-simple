import React from 'react';
// same as 
// const Component = React.Component
import {Component} from 'react';
// or 
// import React, {Component} from 'react';

/*
Funcional component

const SearchBar = () => {
  return <input />;  // calls React.create element, we need to import it
}
*/

// Class based component used when you want to save state of manage its construction

// class SearchBar extends React.Component {
class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  onInputChange(term) {
    this.setState({ term })
    this.props.onSearchTermChange(term);    
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term} 
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }
}

export default SearchBar;