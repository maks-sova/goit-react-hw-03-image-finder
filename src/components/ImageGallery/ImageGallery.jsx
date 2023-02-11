import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import css from '../styles.module.css';

const ImageGallery = ({ gallery, onClick }) => {
  return (
    <>
      <ul className={css.ImageGallery}>
        <ImageGalleryItem gallery={gallery} onClick={onClick} />
      </ul>
    </>
  );
};

ImageGallery.propTypes = {
  gallery: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGallery;
