import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useNeonLightsContext } from '../../context/NeonLightsContext';
import NeonContentWrapper from '../NeonContentWrapper';
import 'styles/modal.scss';

const Modal = ({ children, title, toggleModal }) => {
  const lightsOn = useNeonLightsContext();

  useEffect(() => {
    document.body.classList.add('modal_open');

    return () => {
      document.body.classList.remove('modal_open');
    };
  }, []);

  return ReactDOM.createPortal(
    <setion id='overlay' onClick={() => toggleModal(null)}>
      <NeonContentWrapper color='pink' title={title}>
        <div id='modal' onClick={(e) => e.stopPropagation()}>
          <button
            className={`flicker ${lightsOn ? 'lights-on' : ''}`}
            onClick={() => toggleModal(null)}
          >
            X
          </button>
          {children}
        </div>
      </NeonContentWrapper>
    </setion>,
    document.getElementById('modal-anchor')
  );
};

export default Modal;
