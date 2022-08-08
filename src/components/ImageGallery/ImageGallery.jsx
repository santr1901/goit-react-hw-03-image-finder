import React from 'react';
import css from './ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ ImagesData }) => {
  console.log(ImagesData.map(data => data.id));

  return (
    <ul className={css.ImageGallery}>
      {ImagesData.map(data => (
        <ImageGalleryItem imageId={data.id} imageWebUrl={data.webformatURL} />
      ))}
    </ul>
  );
};

export default ImageGallery;
