import React, { Component } from 'react';

import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import LoadMoreBtn from 'components/Button/Button';

class App extends Component {
  state = {
    searchName: '',
    page: 1,
  };

  handleFormSubmit = searchName => {
    this.setState({ searchName });
  };

  loadMore = () => {
    console.log('loadMore');
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />

        <ImageGallery
          searchName={this.state.searchName}
          page={this.state.page}
          children
        >
          <LoadMoreBtn onLoadMore={this.loadMore} />
        </ImageGallery>
      </div>
    );
  }
}

export default App;
