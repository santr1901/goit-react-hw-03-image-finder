import React from 'react';
import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ imageId, imageWebUrl }) => {
  console.log(imageWebUrl);
  return (
    <li key={imageId} className={css.ImageGalleryItem}>
      <img
        className={css.ImageGalleryItem_image}
        src={imageWebUrl}
        alt="some"
      />
    </li>
  );
};

export default ImageGalleryItem;
