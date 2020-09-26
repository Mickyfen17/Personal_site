import { useCallback, useReducer } from 'react';

const TOGGLE_MODAL = 'TOGGLE_MODAL';

const initialState = {
  modalOpen: false,
  activeProjectId: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_MODAL:
      return {
        ...state,
        modalOpen: action.payload.modalOpen,
        activeProjectId: action.payload.projectId
      };

    default:
      return state;
  }
};
export const useModalReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleModal = useCallback(
    projectId => {
      dispatch({
        type: TOGGLE_MODAL,
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
