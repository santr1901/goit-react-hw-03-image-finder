import React, { Component } from 'react';
import axios from 'axios';

import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = 'key=28107695-b6e67fe78ed729dbc6d2c568c';
class App extends Component {
  state = {
    images: [],
  };

  async componentDidMount() {
    const response = await axios.get(
      `${BASE_URL}?q=cat&page=1&${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    );
    const imageData = response.data.hits.map(image => ({
      id: image.id,
      webformatURL: image.webformatURL,
      largeImageURL: image.largeImageURL,
    }));
    this.setState({ images: imageData });
  }
  render() {
    return (
      <div>
        <Searchbar />
        <ImageGallery ImagesData={this.state.images} />
      </div>
    );
  }
}

export default App;
