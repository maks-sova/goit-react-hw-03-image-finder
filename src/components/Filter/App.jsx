import React from 'react';
import Searchbar from './Searchbar/Searchbar';
import Modal from './Modal/Modal';
// import Loader from './Loader/Loader';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import ImageGallery from './ImageGallery/ImageGallery';
// import Button from './Button/Button';

// import css from './App.module.css';

export class App extends React.Component {
  render() {
    return (
      <div>
        <Searchbar />
        <Modal />
        {/* <Loader /> */}
        <ImageGalleryItem />
        <ImageGallery />
        {/* <Button /> */}
      </div>
    );
  }
}
