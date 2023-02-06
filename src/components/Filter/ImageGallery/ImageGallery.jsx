import { Component } from 'react';
// import PropTypes from 'prop-types';
import css from './ImageGallery.module.css';
class ImageGallery extends Component {
  render() {
    return (
      <ul className={css.gallery}>
        {/* <!-- Набір <li> із зображеннями --> */}
      </ul>
    );
  }
}
export default ImageGallery;
