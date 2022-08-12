import React, { Component } from 'react';

import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import LoadMoreBtn from 'components/Button/Button';
import Modal from 'components/Modal/Modal';

import css from './App.module.css';

class App extends Component {
  state = {
    searchName: '',
    page: 1,
    showModal: false,
    largeImg: '',
  };

  handleFormSubmit = searchName => {
    this.setState({ searchName, page: 1 });
  };

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  largeImg = event => {
    console.log(event.target.tagName);
    if (event.target.nodeName === 'IMG') {
      this.toggleModal();
      this.setState({ largeImg: event.target.name });
    }
  };

  render() {
    const { searchName, page, showModal, largeImg } = this.state;
    return (
      <div className={css.app} onClick={this.largeImg}>
        <Searchbar onSubmit={this.handleFormSubmit} />

        <ImageGallery searchName={searchName} page={page} children>
          <LoadMoreBtn onLoadMore={this.loadMore} />
        </ImageGallery>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img
              width={600}
              height={500}
              src={largeImg}
              alt="Something modal"
            />
          </Modal>
        )}
      </div>
    );
  }
}

export default App;
