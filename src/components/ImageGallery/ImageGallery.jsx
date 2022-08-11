import React, { Component } from 'react';
import axios from 'axios';

import css from './ImageGallery.module.css';

import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Loader from 'components/Loader/Loader';
import Error from './Error/Error';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = 'key=28107695-b6e67fe78ed729dbc6d2c568c';

class ImageGallery extends Component {
  state = {
    images: [],
    loading: false,
    error: null,
  };

  async componentDidUpdate(prevProps) {
    const prevSearchName = prevProps.searchName;
    const searchName = this.props.searchName;
    const prevPage = prevProps.page;
    const realPage = this.props.page;

    if (prevSearchName !== searchName || prevPage !== realPage) {
      this.setState({ loading: true, error: false });
      if (prevSearchName !== searchName) {
        this.setState({ images: [] });
      }
      const allData = await axios
        .get(
          `${BASE_URL}?q=${searchName}&page=${realPage}&${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
        )
        .then(response => {
          return response.data.hits.map(image => ({
            id: image.id,
            webImg: image.webformatURL,
            largeImg: image.largeImageURL,
          }));
        })
        .catch(error => this.setState({ error }))
        .finally(this.setState({ loading: false }));

      this.setState(prevState => ({
        images: [...prevState.images, ...allData],
      }));
    }
  }

  render() {
    const { images, loading, error } = this.state;
    return (
      <div>
        {error && <Error searchName={this.props.searchName} />}
        {loading && <Loader />}
        <ul className={css.ImageGallery}>
          <ImageGalleryItem images={images} />
        </ul>
        {images.length ? this.props.children : ''}
      </div>
    );
  }
}

export default ImageGallery;
