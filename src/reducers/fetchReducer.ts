import * as React from 'react';

type State<T> =
  | { isLoading: true; isError: false }
  | { isLoading: false; isError: true }
  | { isLoading: false; isError: false; data: T };

interface FETCH {
  type: 'FETCH';
}

interface FETCH_SUCCESS<T> {
  type: 'FETCH_SUCCESS';
  payload: {
    data: T;
  };
}

interface FETCH_FAILURE {
  type: 'FETCH_FAILURE';
}

type Actions<T> = FETCH | FETCH_SUCCESS<T> | FETCH_FAILURE;

const fetchReducer = <T>(_: State<T>, action: Actions<T>): State<T> => {
  switch (action.type) {
    case 'FETCH':
      return {
        isLoading: true,
        isError: false
      };
    case 'FETCH_SUCCESS':
      return {
        isLoading: false,
        isError: false,
        data: action.payload.data
      };
    case 'FETCH_FAILURE':
      return {
        isLoading: false,
        isError: true
      };
  }
};

type ApiFetch<T> = (signal: AbortSignal) => Promise<{ data: T }>;

export const useFetchReducer = <T>(api: ApiFetch<T>): [State<T>, VoidFunction] => {
  const [state, dispatch] = React.useReducer<React.Reducer<State<T>, Actions<T>>>(fetchReducer, {
    isLoading: true,
    isError: false
  });

  const retryFetch = React.useCallback(() => {
    dispatch({ type: 'FETCH' });
  }, [dispatch]);

  React.useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    let isCancelled = false;

    if (state.isLoading) {
      api(signal)
        .then(({ data }) => {
          if (!isCancelled) {
            dispatch({ type: 'FETCH_SUCCESS', payload: { data } });
          }
        })
        .catch((error: Error) => {
          if (!isCancelled) {
            dispatch({ type: 'FETCH_FAILURE' });
          }

          console.error(error);
        });
    }

    return () => {
      isCancelled = true;
      controller.abort();
    };
  }, [api, state.isLoading]);

  return [state, retryFetch];
};
