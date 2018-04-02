import React from 'react';
import debounce from 'lodash.debounce';
import storeProvider from './StoreProvider';

class SearchBar extends React.Component {
  state = {
    searchTerm: ''
  }

  doSearch = debounce(() => {
    this.props.store.setSearchTerm(this.state.searchTerm);
  }, 300)

  handleSearch = (event) => {
    this.setState({ searchTerm: event.target.value }, () => {
      this.doSearch();
    });
  }

  render() {
    debugger
    return (
      <input
        type="search"
        placeholder="Enter search terms"
        onChange={this.handleSearch}
        value={this.state.searchTerm}
      />
    );
  }
}

export default storeProvider()(SearchBar);
