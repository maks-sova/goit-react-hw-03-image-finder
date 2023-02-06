import { Component } from 'react';
// import PropTypes from 'prop-types';
import css from './Modal.module.css';
class Modal extends Component {
  render() {
    return (
      <div className={css.overlay}>
        <div class={css.modal}>
          <img src="" alt="" />
        </div>
      </div>
    );
  }
}
export default Modal;
