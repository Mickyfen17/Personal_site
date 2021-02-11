import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import NeonContentWrapper from '../NeonContentWrapper';
import 'styles/modal.scss';

const Modal = ({ children, title, toggleModal }) => {
  useEffect(() => {
    document.body.classList.add('modal_open');

    return () => {
      document.body.classList.remove('modal_open');
    };
  }, []);

  return ReactDOM.createPortal(
    <setion id='overlay' onClick={() => toggleModal(null)}>
      <NeonContentWrapper color='pink' title={title}>
        <div id='modal'>
          <button onClick={() => toggleModal(null)}>Close</button>
          {children}
        </div>
      </NeonContentWrapper>
    </setion>,
    document.getElementById('modal-anchor')
  );
};

export default Modal;
