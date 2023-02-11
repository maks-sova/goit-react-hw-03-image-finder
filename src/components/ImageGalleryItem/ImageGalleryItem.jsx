import React from 'react';
import PropTypes from 'prop-types';
import css from '../styles.module.css';

const ImageGalleryItem = ({ gallery, onClick }) => {
  return gallery.map(({ id, webformatURL, tags, largeImageURL }) => (
    <li
      className={css.ImageGalleryItem}
      key={id}
      onClick={() => {
        onClick(largeImageURL, tags);
      }}
    >
      <img src={webformatURL} alt={tags} className={css.ImageGalleryList} />
    </li>
  ));
};

ImageGalleryItem.propTypes = {
  id: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
