import * as React from 'react';
import { ToggleModal } from '../sharedTypes';

interface State {
  modalOpen: boolean;
  activeProjectId: string | null;
}

type ACTION_TYPE = {
  type: 'TOGGLE_MODAL';
  payload: { modalOpen: boolean; projectId: string | null };
};

const initialState = {
  modalOpen: false,
  activeProjectId: null
};

const reducer = (state: State, action: ACTION_TYPE) => {
  switch (action.type) {
    case 'TOGGLE_MODAL':
      return {
        ...state,
        modalOpen: action.payload.modalOpen,
        activeProjectId: action.payload.projectId
      };

    default:
      return state;
  }
};

export const useModalReducer = (): {
  activeProjectId: string | null;
  modalOpen: boolean;
  toggleModal: ToggleModal;
} => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const toggleModal = React.useCallback(
    (projectId: string | null) => {
      dispatch({
        type: 'TOGGLE_MODAL',
        payload: { modalOpen: !state.modalOpen, projectId }
      });
    },
    [state.modalOpen]
  );

  return {
    activeProjectId: state.activeProjectId,
    modalOpen: state.modalOpen,
    toggleModal
  };
};
