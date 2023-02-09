import React from 'react';
import css from './Button.module.css';
import PropTypes from 'prop-types';

const Button = ({ onLoadMore }) => {
  return (
    <div className={css.loadMore}>
      <button className={css.button} type="button" onClick={onLoadMore}>
        LoadMore
      </button>
    </div>
  );
};

export default Button;

Button.protoType = {
  LoadMore: PropTypes.func.isRequired,
};
