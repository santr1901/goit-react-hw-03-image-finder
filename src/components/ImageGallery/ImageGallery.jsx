import React, { Component } from 'react';
import axios from 'axios';
import css from './ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = 'key=28107695-b6e67fe78ed729dbc6d2c568c';

class ImageGallery extends Component {
  state = {
    images: [],
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const response = await axios
      .get(
        `${BASE_URL}?q=${this.props.searchName}&page=1&${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
      )
      .finally(this.setState({ loading: false }));

    const imageData = response.data.hits.map(image => ({
      id: image.id,
      webformatURL: image.webformatURL,
      largeImageURL: image.largeImageURL,
    }));
    this.setState({ images: imageData });
  }

  render() {
    return (
      <ul className={css.ImageGallery}>
        <ImageGalleryItem images={this.state.images} />
      </ul>
    );
  }
}

export default ImageGallery;
