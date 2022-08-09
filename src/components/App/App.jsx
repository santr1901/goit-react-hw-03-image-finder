import React, { Component } from 'react';
// import { ToastContainer } from 'react-toastify';

import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';

class App extends Component {
  state = {
    searchName: '',
    loading: false,
  };

  // async componentDidMount() {
  //   this.setState({ loading: true });
  //   const response = await axios
  //     .get(
  //       `${BASE_URL}?q=cat&page=1&${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  //     )
  //     .finally(this.setState({ loading: false }));

  //   const imageData = response.data.hits.map(image => ({
  //     id: image.id,
  //     webformatURL: image.webformatURL,
  //     largeImageURL: image.largeImageURL,
  //   }));
  //   this.setState({ images: imageData });
  // }
  handleFormSubmit = searchName => {
    console.log(searchName);
    this.setState({ searchName });
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {this.state.searchName && (
          <ImageGallery searchName={this.state.searchName} />
        )}
        {/* <ToastContainer autoClose={3000} /> */}
      </div>
    );
  }
}

export default App;
