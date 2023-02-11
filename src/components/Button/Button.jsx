import React from 'react';
import css from '../styles.module.css';
import PropTypes from 'prop-types';

const ButtonLoaderMore = ({ loader }) => {
  return (
    <button className={css.Button} onClick={() => loader()}>
      Loder more
    </button>
  );
};

ButtonLoaderMore.protoType = {
  LoadMore: PropTypes.func.isRequired,
};

export default ButtonLoaderMore;
