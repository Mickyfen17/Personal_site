import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import 'styles/modal.scss';

const Modal = ({ children, toggleModal }) => {
  useEffect(() => {
    document.body.classList.add('modal_open');

    return () => {
      document.body.classList.remove('modal_open');
    };
  }, []);

  return ReactDOM.createPortal(
    <div id="overlay" onClick={() => toggleModal(null)}>
      <div id="modal">
        <button onClick={() => toggleModal(null)}>Close</button>
        {children}
      </div>
    </div>,
    document.getElementById('modal-anchor')
  );
};

export default Modal;
