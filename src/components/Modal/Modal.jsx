import React, { Component } from 'react';
import css from './Modal.module.css';

class Modal extends Component {
  state = {};
  render() {
    return (
      <div className={css.overlay}>
        <div className={css.modal}>{this.props.children}</div>
      </div>
    );
  }
}

export default Modal;
