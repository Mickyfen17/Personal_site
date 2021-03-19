/* eslint-disable jsx-a11y/no-static-element-interactions */
import * as React from 'react';
import ReactDOM from 'react-dom';
import { useNeonLightsContext } from '../context/NeonLightsContext';
import { NeonContentWrapper } from './NeonContentWrapper';
import { ToggleModal } from '../reducers/useModalReducer';
import 'styles/modal.scss';

interface ModalProps {
  children: React.ReactNode;
  title: string;
  toggleModal: ToggleModal;
}

export const Modal = ({ children, title, toggleModal }: ModalProps): JSX.Element => {
  const lightsOn = useNeonLightsContext();

  React.useEffect(() => {
    document.body.classList.add('modal_open');

    return () => {
      document.body.classList.remove('modal_open');
    };
  }, []);

  return ReactDOM.createPortal(
    <section id='overlay' onClick={() => toggleModal(null)} onKeyDown={() => toggleModal(null)}>
      <NeonContentWrapper color='pink' title={title}>
        <div id='modal' onClick={(e) => e.stopPropagation()} onKeyDown={(e) => e.stopPropagation()}>
          <button
            className={`flicker ${lightsOn ? 'lights-on' : ''}`}
            onClick={() => toggleModal(null)}
          >
            X
          </button>
          {children}
        </div>
      </NeonContentWrapper>
    </section>,
    document.getElementById('modal-anchor')
  );
};
