import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem.jsx';
import css from './ImageGallery.module.css';

const ImageGallery = ({ images, onModal }) => {
  return (
    <div className={css.container}>
      <ul
        className={css.gallery}
        onClick={e => {
          onModal({
            src: e.target.getAttribute('large'),
            alt: e.target.getAttribute('alt'),
          });
        }}
      >
        {images.map(image => (
          <ImageGalleryItem image={image} key={image.id} />
        ))}
      </ul>
    </div>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  onModal: PropTypes.func.isRequired,
};

export default ImageGallery;
