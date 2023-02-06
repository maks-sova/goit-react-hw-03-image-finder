import { Component } from 'react';
// import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';
class ImageGalleryItem extends Component {
  render() {
    return (
      <li class={css.gallery_item}>
        <img src="" alt="" />
      </li>
    );
  }
}
export default ImageGalleryItem;
